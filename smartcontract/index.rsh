"reach 0.1";
// "use strict"

//    - Create Event by taking in
//      - Location,
//      - Number of Seats
//      - Max Resell Price
//
// const TOTAL_SEATS = 10;

// I need people to create nfts and access them on my frontend
// Mint a bunch of Nfts
// Transfer them to my contract
// List them on another contract
const DEADLINE = 3000;
// const name = Bytes(12);
const description = Bytes(300);
const amount = UInt;
const DEFAULT_TYPE = Struct([["ticketsBought", UInt]]);
const DEFAULT_BUYER = DEFAULT_TYPE.fromObject({
  ticketsBought: 0,
});

const eventName = Bytes(32);
const eventSymbol = Bytes(8);
// const eventUrl = Bytes(96);
// const eventMeta = Bytes(32);
const eventLocation = Bytes(30);
const info = Object({
  tokAmt: UInt,
  price: UInt,
  tok: Token,
  // maxResalePrice: UInt,
  eventName,
  eventSymbol,
  // eventUrl,
  // eventMeta,
  eventLocation,
});

const eventInfo = Object({
  price: UInt,
  eventName,
  eventSymbol,
  // eventUrl,
  // eventMeta,
  eventLocation,
});

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true, connectors: [ALGO] });

  const A = Participant("VenueOrArtist", {
    notify: Fun([], Null),
    getParams: Fun([], info),
  });
  const Buyers = API("buyers", {
    buy: Fun([UInt], Bool),
  });
  const Owner = API("owner", {
    end: Fun([], Bool),
  });

  const E = Events("notify", {
    done: [eventInfo],
    ended: [Bool],
  });

  const view = View("details", {
    get: info,
    sold: UInt,
  });

  init();
  A.only(() => {
    const {
      tokAmt,
      tok,
      price,
      eventName: name,
      eventSymbol: symbol,
      // eventUrl: url,
      eventLocation: venueLoacation,
    } = declassify(interact.getParams());
  });
  A.publish(price, name, symbol, venueLoacation, tok, tokAmt);
  commit();

  A.pay([[tokAmt, tok]]);
  A.interact.notify();
  // const DEFAULT_TYPE = Struct([["ticketsBought", UInt]]);
  const def_struct_vals = DEFAULT_TYPE.fromTuple([0]);
  const buyerMap = new Map(DEFAULT_TYPE);

  const [bal, sold, end] = parallelReduce([0, 0, false])
    .invariant(balance() == bal)
    .while(tokAmt > sold && !end)
    .define(() => {
      view.sold.set(sold);
    })
    .api(
      Buyers.buy,
      (a) => {
        const prev_struct = fromSome(buyerMap[this], def_struct_vals);
        const prev_amt = Struct.toTuple(prev_struct);
        check(prev_amt[0] + a <= 5, "Cannot purchase more Ticket exceeded");
      },
      (b) => b * price,
      (amt, k) => {
        const prev_struct = fromSome(buyerMap[this], def_struct_vals);
        const prev_amt = Struct.toTuple(prev_struct);
        const data = DEFAULT_TYPE.fromTuple([prev_amt[0] + amt]);
        buyerMap[this] = data;
        const Amt = balance(tok)>amt?amt:balance(tok)
        transfer(Amt,tok).to(this)
        // E.done(data);
        k(true);
        return [bal + price * amt, sold + amt, end];
      }
    )
    .api(
      Owner.end,
      () => {
        check(this == A, "You are not the Owner of this set");
      },
      () => 0,
      (k) => {
        transfer(balance(tok), tok).to(this);
        k(true);
        E.ended(true);
        return [bal, sold + 1, true];
      }
    )
    .timeout(false);

  transfer(balance()).to(A);
  transfer(balance(tok), tok).to(A);
  commit();

  exit();
});

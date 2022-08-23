import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

if (
  process.argv.length < 3 ||
  ["Deployer", "Buyer"].includes(process.argv[2]) == false
) {
  console.log("Usage: reach run index [Deployer|Buyer]");
  process.exit(0);
}
const role = process.argv[2];

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(1000);

const Buyer = async (info, acct, name = "Unknown") => {
  const acc = acct ?? (await stdlib.newTestAccount(startingBalance));
  const ctc = acc.contract(backend, info);

  const buy = async (howMany) => {
    try {
      const statement = await ctc.apis.buyers.buy(howMany);
      console.log(statement);
    } catch (error) {
      console.error(error);
    }
  };
  const end = async () => {
    try {
      const statement = await ctc.apis.owner.end();
      console.log(statement);
    } catch (error) {
      console.error(error);
    }
  };

  const getSold =async () =>{
    try {
      const soldAmt = await ctc.v.details.sold();
      console.log({soldAmt})
      return soldAmt
    } catch (error) {
      console.error(error)
    }
  }

  const getBalance = async (acc = acc) => {
    return await stdlib.balanceOf(acc);
  };

  const displayBalance = async () => {
    console.log(`${name}'s balance: ${fmt(await getBalance())}`);
  };
  const getLog = (f) => async () => {
    const { when, what } = await ctc.e.notify.send.next();
    const lastTime = await ctc.e.notify.send.lastTime();
    console.log("what", what);
    return what;
  };

  return {
    buy,
    getSold,
    end,
    getBalance,
    displayBalance,
    getLog,
    acc,
  };
};

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);

console.log("Hello, Deployer and Buyer!");

console.log("Launching...");

console.log("Starting backends...");

const eventName = "test";
const eventSymbol = "test";
const eventUrl = "test";
const eventMeta = "test";

if (role == "Deployer") {
  try {
    const ctc = await accAlice.contract(backend);
    console.log("You the deployer");
    const supply = 10_000;
    const { id } = await stdlib.launchToken(accAlice, eventName, eventSymbol, {
      url: eventUrl,
      supply,
      decimals: 0,
    });
    await backend.VenueOrArtist(ctc, {
      notify: async () => {
        console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
      },

      getParams: async () => {
        return {
          price: stdlib.parseCurrency(40),
          tokAmt: supply,
          tok: id,
          eventName,
          eventSymbol,
          // eventUrl,
          // eventMeta,
          eventLocation: "test",
        };
      },
    });
  } catch (error) {
    console.log({ error });
  }
}
if (role == "Buyer") {
  try {
    const info = await ask.ask("Paste contract info:", (s) => JSON.parse(s));

    const newUSer = await Buyer(info);
    const user2 = await Buyer(info);
    const user3 = await Buyer(info);
    const user4 = await Buyer(info);
    const user5 = await Buyer(info);

    await newUSer.buy(5);
    console.log(stdlib.formatAddress(newUSer.acc));
    const deployer = await Buyer(info, accAlice);
    // await deployer.end();
    await deployer.buy(5);
     await user2.buy(3)

     await user3.buy(3)
     await user3.getSold()
     await user4.buy(3)
     await user5.buy(10)
     await user3.getSold()
     
    // Create a map to call all
  } catch (error) {
    console.log(error);
  }
}
ask.done();
console.log("Goodbye, VenueOrArtist and Participants!");

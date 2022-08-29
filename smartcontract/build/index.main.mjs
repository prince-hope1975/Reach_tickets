// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    eventLocation: ctc0,
    eventName: ctc1,
    eventSymbol: ctc2,
    price: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  return {
    notify: {
      done: [ctc4],
      ended: [ctc5]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc9 = stdlib.T_Object({
    eventLocation: ctc6,
    eventName: ctc7,
    eventSymbol: ctc8,
    price: ctc1,
    tok: ctc2,
    tokAmt: ctc1
    });
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Struct([['ticketsBought', ctc1]]);
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc11
    });
  const map0_ctc = ctc12;
  
  
  const details_get = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v350, v351, v355, v356, v361] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v350, v351, v355, v356, v374, v375, v376, v383, v384] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const details_sold = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v350, v351, v355, v356, v361] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v350, v351, v355, v356, v374, v375, v376, v383, v384] = svs;
      return (await ((async () => {
        
        
        return v376;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      details: {
        get: {
          decode: details_get,
          dom: [],
          rng: ctc9
          },
        sold: {
          decode: details_sold,
          dom: [],
          rng: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc5],
      4: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc1, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['ticketsBought', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function VenueOrArtist(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for VenueOrArtist expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for VenueOrArtist expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['ticketsBought', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Object({
    eventLocation: ctc4,
    eventName: ctc5,
    eventSymbol: ctc6,
    price: ctc1,
    tok: ctc7,
    tokAmt: ctc1
    });
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    buyers_buy0_70: ctc9,
    owner_end0_70: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v330 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v331 = [v330];
  const v337 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:84:38:application',
    fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:13:function exp)'],
    msg: 'getParams',
    who: 'VenueOrArtist'
    });
  const v338 = v337.eventLocation;
  const v339 = v337.eventName;
  const v340 = v337.eventSymbol;
  const v341 = v337.price;
  const v342 = v337.tok;
  const v343 = v337.tokAmt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v341, v339, v340, v338, v342, v343],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc5, ctc6, ctc4, ctc7, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v351, v352, v353, v354, v355, v356], secs: v358, time: v357, didSend: v44, from: v350 } = txn1;
      
      const v359 = v331[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
      const v360 = stdlib.Array_set(v359, '0', stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'));
      const v361 = stdlib.Array_set(v331, stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'), v360);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v355
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc5, ctc6, ctc4, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v351, v352, v353, v354, v355, v356], secs: v358, time: v357, didSend: v44, from: v350 } = txn1;
  const v359 = v331[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
  const v360 = stdlib.Array_set(v359, '0', stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'));
  const v361 = stdlib.Array_set(v331, stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'), v360);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v350, v351, v355, v356, v361],
    evt_cnt: 0,
    funcNum: 1,
    lct: v357,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0'), [[v356, v355]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v365, time: v364, didSend: v51, from: v363 } = txn2;
      
      ;
      const v366 = v361[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
      const v367 = v366[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
      const v368 = stdlib.add(v367, v356);
      const v370 = stdlib.Array_set(v366, '0', v368);
      const v371 = stdlib.Array_set(v361, stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0'), v370);
      sim_r.txns.push({
        amt: v356,
        kind: 'to',
        tok: v355
        });
      
      const v374 = stdlib.checkedBigNumberify('./index.rsh:95:44:decimal', stdlib.UInt_max, '0');
      const v375 = false;
      const v376 = stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', stdlib.UInt_max, '0');
      const v377 = v364;
      const v383 = v371;
      const v384 = stdlib.checkedBigNumberify('./index.rsh:74:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v387 = stdlib.gt(v356, v376);
        const v388 = v375 ? false : true;
        const v389 = v387 ? v388 : false;
        
        return v389;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v350,
          tok: undefined /* Nothing */
          });
        const v561 = v383[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
        const v562 = v561[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v350,
          tok: v355
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v355
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc1, ctc7, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v365, time: v364, didSend: v51, from: v363 } = txn2;
  ;
  const v366 = v361[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
  const v367 = v366[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
  const v368 = stdlib.add(v367, v356);
  const v370 = stdlib.Array_set(v366, '0', v368);
  const v371 = stdlib.Array_set(v361, stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0'), v370);
  ;
  const v372 = stdlib.addressEq(v350, v363);
  stdlib.assert(v372, {
    at: './index.rsh:89:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'VenueOrArtist'
    });
  stdlib.protect(ctc0, await interact.notify(), {
    at: './index.rsh:90:20:application',
    fs: ['at ./index.rsh:90:20:application call to [unknown function] (defined at: ./index.rsh:90:20:function exp)', 'at ./index.rsh:90:20:application call to "liftedInteract" (defined at: ./index.rsh:90:20:application)'],
    msg: 'notify',
    who: 'VenueOrArtist'
    });
  
  let v374 = stdlib.checkedBigNumberify('./index.rsh:95:44:decimal', stdlib.UInt_max, '0');
  let v375 = false;
  let v376 = stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', stdlib.UInt_max, '0');
  let v377 = v364;
  let v383 = v371;
  let v384 = stdlib.checkedBigNumberify('./index.rsh:74:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v387 = stdlib.gt(v356, v376);
    const v388 = v375 ? false : true;
    const v389 = v387 ? v388 : false;
    
    return v389;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v423], secs: v425, time: v424, didSend: v216, from: v422 } = txn3;
    switch (v423[0]) {
      case 'buyers_buy0_70': {
        const v426 = v423[1];
        undefined /* setApiDetails */;
        const v431 = v426[stdlib.checkedBigNumberify('./index.rsh:101:9:spread', stdlib.UInt_max, '0')];
        const v432 = stdlib.safeMul(v431, v351);
        const v435 = stdlib.add(v384, v432);
        ;
        const v438 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v422), null);
        const v439 = {
          ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v440 = stdlib.fromSome(v438, v439);
        const v441 = v440.ticketsBought;
        const v442 = stdlib.safeAdd(v441, v431);
        const v443 = {
          ticketsBought: v442
          };
        await stdlib.mapSet(map0, v422, v443);
        const v444 = v383[stdlib.checkedBigNumberify('./index.rsh:114:28:application', stdlib.UInt_max, '0')];
        const v445 = v444[stdlib.checkedBigNumberify('./index.rsh:114:28:application', stdlib.UInt_max, '0')];
        const v446 = stdlib.gt(v445, v431);
        const v449 = v446 ? v431 : v445;
        const v455 = stdlib.sub(v445, v449);
        const v457 = stdlib.Array_set(v444, '0', v455);
        const v458 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:115:29:application', stdlib.UInt_max, '0'), v457);
        ;
        const v459 = true;
        await txn3.getOutput('buyers_buy', 'v459', ctc12, v459);
        const v466 = stdlib.safeMul(v351, v431);
        const v467 = stdlib.safeAdd(v374, v466);
        const v468 = stdlib.safeAdd(v376, v431);
        const cv374 = v467;
        const cv375 = v375;
        const cv376 = v468;
        const cv377 = v424;
        const cv383 = v458;
        const cv384 = v435;
        
        v374 = cv374;
        v375 = cv375;
        v376 = cv376;
        v377 = cv377;
        v383 = cv383;
        v384 = cv384;
        
        continue;
        break;
        }
      case 'owner_end0_70': {
        const v491 = v423[1];
        undefined /* setApiDetails */;
        ;
        const v536 = v383[stdlib.checkedBigNumberify('./index.rsh:128:25:application', stdlib.UInt_max, '0')];
        const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:128:25:application', stdlib.UInt_max, '0')];
        const v543 = stdlib.sub(v537, v537);
        const v545 = stdlib.Array_set(v536, '0', v543);
        const v546 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'), v545);
        ;
        const v547 = true;
        await txn3.getOutput('owner_end', 'v547', ctc12, v547);
        const v553 = true;
        null;
        const v554 = stdlib.safeAdd(v376, stdlib.checkedBigNumberify('./index.rsh:131:29:decimal', stdlib.UInt_max, '1'));
        const cv374 = v374;
        const cv375 = true;
        const cv376 = v554;
        const cv377 = v424;
        const cv383 = v546;
        const cv384 = v384;
        
        v374 = cv374;
        v375 = cv375;
        v376 = cv376;
        v377 = cv377;
        v383 = cv383;
        v384 = cv384;
        
        continue;
        break;
        }
      }
    
    }
  ;
  const v561 = v383[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
  const v562 = v561[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  };
export async function _buyers_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyers_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyers_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['ticketsBought', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    buyers_buy0_70: ctc9,
    owner_end0_70: ctc10
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v350, v351, v355, v356, v374, v375, v376, v383, v384] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v390 = ctc.selfAddress();
  const v392 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:11:function exp)', 'at ./index.rsh:95:42:application call to "runbuyers_buy0_70" (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'in',
    who: 'buyers_buy'
    });
  const v393 = v392[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v396 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v390), null);
  const v397 = {
    ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v398 = stdlib.fromSome(v396, v397);
  const v399 = v398.ticketsBought;
  const v400 = stdlib.safeAdd(v399, v393);
  const v401 = stdlib.le(v400, stdlib.checkedBigNumberify('./index.rsh:106:34:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v401, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:106:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:11:function exp)', 'at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:11:function exp)', 'at ./index.rsh:95:42:application call to "runbuyers_buy0_70" (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'Cannot purchase more Ticket exceeded',
    who: 'buyers_buy'
    });
  const v406 = ['buyers_buy0_70', v392];
  
  const v420 = stdlib.safeMul(v393, v351);
  
  const txn1 = await (ctc.sendrecv({
    args: [v350, v351, v355, v356, v374, v375, v376, v383, v384, v406],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v420, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v423], secs: v425, time: v424, didSend: v216, from: v422 } = txn1;
      
      switch (v423[0]) {
        case 'buyers_buy0_70': {
          const v426 = v423[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyers_buy"
            });
          const v431 = v426[stdlib.checkedBigNumberify('./index.rsh:101:9:spread', stdlib.UInt_max, '0')];
          const v432 = stdlib.safeMul(v431, v351);
          const v435 = stdlib.add(v384, v432);
          sim_r.txns.push({
            amt: v432,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v438 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v422), null);
          const v439 = {
            ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v440 = stdlib.fromSome(v438, v439);
          const v441 = v440.ticketsBought;
          const v442 = stdlib.safeAdd(v441, v431);
          const v443 = {
            ticketsBought: v442
            };
          await stdlib.simMapSet(sim_r, 0, v422, v443);
          const v444 = v383[stdlib.checkedBigNumberify('./index.rsh:114:28:application', stdlib.UInt_max, '0')];
          const v445 = v444[stdlib.checkedBigNumberify('./index.rsh:114:28:application', stdlib.UInt_max, '0')];
          const v446 = stdlib.gt(v445, v431);
          const v449 = v446 ? v431 : v445;
          const v455 = stdlib.sub(v445, v449);
          const v457 = stdlib.Array_set(v444, '0', v455);
          const v458 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:115:29:application', stdlib.UInt_max, '0'), v457);
          sim_r.txns.push({
            kind: 'from',
            to: v422,
            tok: v355
            });
          const v459 = true;
          const v460 = await txn1.getOutput('buyers_buy', 'v459', ctc6, v459);
          
          const v466 = stdlib.safeMul(v351, v431);
          const v467 = stdlib.safeAdd(v374, v466);
          const v468 = stdlib.safeAdd(v376, v431);
          const v754 = v467;
          const v755 = v375;
          const v756 = v468;
          const v758 = v458;
          const v759 = v435;
          const v760 = stdlib.gt(v356, v468);
          const v761 = v375 ? false : true;
          const v762 = v760 ? v761 : false;
          if (v762) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v350,
              tok: undefined /* Nothing */
              });
            const v763 = v458[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
            const v764 = v763[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v350,
              tok: v355
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v355
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'owner_end0_70': {
          const v491 = v423[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc5, ctc1, ctc1, ctc6, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v423], secs: v425, time: v424, didSend: v216, from: v422 } = txn1;
  switch (v423[0]) {
    case 'buyers_buy0_70': {
      const v426 = v423[1];
      undefined /* setApiDetails */;
      const v431 = v426[stdlib.checkedBigNumberify('./index.rsh:101:9:spread', stdlib.UInt_max, '0')];
      const v432 = stdlib.safeMul(v431, v351);
      const v435 = stdlib.add(v384, v432);
      ;
      const v438 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v422), null);
      const v439 = {
        ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v440 = stdlib.fromSome(v438, v439);
      const v441 = v440.ticketsBought;
      const v442 = stdlib.safeAdd(v441, v431);
      const v443 = {
        ticketsBought: v442
        };
      await stdlib.mapSet(map0, v422, v443);
      const v444 = v383[stdlib.checkedBigNumberify('./index.rsh:114:28:application', stdlib.UInt_max, '0')];
      const v445 = v444[stdlib.checkedBigNumberify('./index.rsh:114:28:application', stdlib.UInt_max, '0')];
      const v446 = stdlib.gt(v445, v431);
      const v449 = v446 ? v431 : v445;
      const v455 = stdlib.sub(v445, v449);
      const v457 = stdlib.Array_set(v444, '0', v455);
      const v458 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:115:29:application', stdlib.UInt_max, '0'), v457);
      ;
      const v459 = true;
      const v460 = await txn1.getOutput('buyers_buy', 'v459', ctc6, v459);
      if (v216) {
        stdlib.protect(ctc0, await interact.out(v426, v460), {
          at: './index.rsh:102:7:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:7:function exp)', 'at ./index.rsh:117:10:application call to "k" (defined at: ./index.rsh:109:16:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:16:function exp)'],
          msg: 'out',
          who: 'buyers_buy'
          });
        }
      else {
        }
      
      const v466 = stdlib.safeMul(v351, v431);
      const v467 = stdlib.safeAdd(v374, v466);
      const v468 = stdlib.safeAdd(v376, v431);
      const v754 = v467;
      const v755 = v375;
      const v756 = v468;
      const v758 = v458;
      const v759 = v435;
      const v760 = stdlib.gt(v356, v468);
      const v761 = v375 ? false : true;
      const v762 = v760 ? v761 : false;
      if (v762) {
        return;
        }
      else {
        ;
        const v763 = v458[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
        const v764 = v763[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'owner_end0_70': {
      const v491 = v423[1];
      return;
      break;
      }
    }
  
  
  };
export async function _owner_end4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _owner_end4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _owner_end4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['ticketsBought', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    buyers_buy0_70: ctc10,
    owner_end0_70: ctc9
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v350, v351, v355, v356, v374, v375, v376, v383, v384] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v408 = ctc.selfAddress();
  const v410 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:123:10:application call to [unknown function] (defined at: ./index.rsh:123:10:function exp)', 'at ./index.rsh:95:42:application call to "runowner_end0_70" (defined at: ./index.rsh:121:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'in',
    who: 'owner_end'
    });
  const v412 = stdlib.addressEq(v408, v350);
  stdlib.assert(v412, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:124:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:10:application call to [unknown function] (defined at: ./index.rsh:123:10:function exp)', 'at ./index.rsh:123:10:application call to [unknown function] (defined at: ./index.rsh:123:10:function exp)', 'at ./index.rsh:95:42:application call to "runowner_end0_70" (defined at: ./index.rsh:121:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'You are not the Owner of this set',
    who: 'owner_end'
    });
  const v416 = ['owner_end0_70', v410];
  
  const txn1 = await (ctc.sendrecv({
    args: [v350, v351, v355, v356, v374, v375, v376, v383, v384, v416],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:126:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v423], secs: v425, time: v424, didSend: v216, from: v422 } = txn1;
      
      switch (v423[0]) {
        case 'buyers_buy0_70': {
          const v426 = v423[1];
          
          break;
          }
        case 'owner_end0_70': {
          const v491 = v423[1];
          sim_r.txns.push({
            kind: 'api',
            who: "owner_end"
            });
          ;
          const v536 = v383[stdlib.checkedBigNumberify('./index.rsh:128:25:application', stdlib.UInt_max, '0')];
          const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:128:25:application', stdlib.UInt_max, '0')];
          const v543 = stdlib.sub(v537, v537);
          const v545 = stdlib.Array_set(v536, '0', v543);
          const v546 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'), v545);
          sim_r.txns.push({
            kind: 'from',
            to: v422,
            tok: v355
            });
          const v547 = true;
          const v548 = await txn1.getOutput('owner_end', 'v547', ctc6, v547);
          
          const v553 = true;
          null;
          const v554 = stdlib.safeAdd(v376, stdlib.checkedBigNumberify('./index.rsh:131:29:decimal', stdlib.UInt_max, '1'));
          const v787 = v374;
          const v788 = true;
          const v789 = v554;
          const v791 = v546;
          const v792 = v384;
          const v793 = stdlib.gt(v356, v554);
          const v795 = v793 ? false : false;
          if (v795) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v350,
              tok: undefined /* Nothing */
              });
            const v796 = v546[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
            const v797 = v796[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v350,
              tok: v355
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v355
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc5, ctc1, ctc1, ctc6, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v423], secs: v425, time: v424, didSend: v216, from: v422 } = txn1;
  switch (v423[0]) {
    case 'buyers_buy0_70': {
      const v426 = v423[1];
      return;
      break;
      }
    case 'owner_end0_70': {
      const v491 = v423[1];
      undefined /* setApiDetails */;
      ;
      const v536 = v383[stdlib.checkedBigNumberify('./index.rsh:128:25:application', stdlib.UInt_max, '0')];
      const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:128:25:application', stdlib.UInt_max, '0')];
      const v543 = stdlib.sub(v537, v537);
      const v545 = stdlib.Array_set(v536, '0', v543);
      const v546 = stdlib.Array_set(v383, stdlib.checkedBigNumberify('./index.rsh:128:39:application', stdlib.UInt_max, '0'), v545);
      ;
      const v547 = true;
      const v548 = await txn1.getOutput('owner_end', 'v547', ctc6, v547);
      if (v216) {
        stdlib.protect(ctc0, await interact.out(v491, v548), {
          at: './index.rsh:122:7:application',
          fs: ['at ./index.rsh:122:7:application call to [unknown function] (defined at: ./index.rsh:122:7:function exp)', 'at ./index.rsh:129:10:application call to "k" (defined at: ./index.rsh:127:11:function exp)', 'at ./index.rsh:127:11:application call to [unknown function] (defined at: ./index.rsh:127:11:function exp)'],
          msg: 'out',
          who: 'owner_end'
          });
        }
      else {
        }
      
      const v553 = true;
      null;
      const v554 = stdlib.safeAdd(v376, stdlib.checkedBigNumberify('./index.rsh:131:29:decimal', stdlib.UInt_max, '1'));
      const v787 = v374;
      const v788 = true;
      const v789 = v554;
      const v791 = v546;
      const v792 = v384;
      const v793 = stdlib.gt(v356, v554);
      const v795 = v793 ? false : false;
      if (v795) {
        return;
        }
      else {
        ;
        const v796 = v546[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
        const v797 = v796[stdlib.checkedBigNumberify('./index.rsh:137:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function buyers_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyers_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyers_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _buyers_buy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function owner_end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for owner_end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for owner_end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _owner_end4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`buyers_buy(uint64)byte`, `owner_end()byte`],
    pure: [`details_get()(byte[30],byte[32],byte[8],uint64,uint64,uint64)`, `details_sold()uint64`],
    sigs: [`buyers_buy(uint64)byte`, `details_get()(byte[30],byte[32],byte[8],uint64,uint64,uint64)`, `details_sold()uint64`, `owner_end()byte`]
    },
  appApproval: `BiANAAEECAmr6vL9DbPcpaIPu8n7/gQDICgwoI0GJgMBAAEBACI1ADEYQQPwKmRJIls1ASVbNQIxGSMSQQAKMQAoIQSvZkIDvTYaABdJQQBdIjUEIzUGSSEFDEAAHkkhBgxAAAchBhJENAEAIQUSRDYaATX/KDT/UEIAUEkhBwxAABEhBxJEKjX/KTT/UCWvUEIAOIHNgc3LAxJENAEkEkQoZEk1A1dBCDUHQgNnNhoCFzUENhoDNhoBF0kjDEAB0kkhCAxAAVwhCBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/IQlbNf4hCls1/SELWzX8gThbNfuBQVs1+ldJETX5gVpbNfhJNQU194AEkfGnmjT3ULA09yJVQACkNPdXAQg19jT2F0k19TT+CzX0NPSIAxAxACgpJa8xAIgC9kk181cBCDTzIlVNFzT1CBZQZjT5VwARSTXzIltJNfI09TTyNPUNTTXxsSKyATTxshIkshAxALIUNP2yEbOACQAAAAAAAAHLAbApNQc0/zT+NP00/DT7NP409QsINANXQAEXNPo09QgyBjTzNPI08QkWNfBXCAk08ExQNPg09AhCAXI0+VcAEUk19iJbNfWxIrIBNPWyEiSyEDEAshQ0/bIRs4AJAAAAAAAAAiMBsCk1B4AFLJcdZAGwNP80/jT9NPw0+yM0+iMIMgY09jT1SQkWNfRXCAk09ExQNPhCARUjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQpbNf4hC1s1/Vc4ETX8gASai5F0sDT8VwARNfs0/TT+iAH7NP8xABJENP80AyEJWzT+NP0iIiIyBjT7SSJbNP0IFjX6VwgJNPpMUCJCAKZIIQyIAbEiNAESRDQESSISTDQCEhFESTUFSUpKIls1/1cIIDX+VygINf1XMB41/IFOWzX7gVZbNfqABJAxIkI0/xZQNP5QNP1QNPxQNPsWUDT6FlCwgRGvSTX5VwARJa8191cICTT3TFA1+CEMiAFHsSKyASKyEiSyEDIKshQ0+7IRszEANP8WUDT7FlA0+hZQNPhQKEsBVwBJZ0gjNQEyBjUCQgCwNf81/jX9Nfw1+zX6Nfk1+DX3NfY0+TT8DTT7FBBBADE09jT3FlA0+BZQNPkWUDT6FlAoUDT8FlA0/lA0/xZQKEsBVwBiZ0gkNQEyBjUCQgBfsSKyATT/sggjshA09rIHs7EisgE0/lcAESJbshIkshA09rIUNPiyEbOxIrIBIrISJLIQMgmyFTIKshQ0+LIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghBK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:138:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:95:42:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "VenueOrArtist": VenueOrArtist,
  "buyers_buy": buyers_buy,
  "owner_end": owner_end
  };
export const _APIs = {
  buyers: {
    buy: buyers_buy
    },
  owner: {
    end: owner_end
    }
  };

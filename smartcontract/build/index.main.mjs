// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bool;
  return {
    notify: {
      ended: [ctc0]
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
      const [v342, v343, v347, v348, v356] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v342, v343, v347, v348, v374, v375, v382, v383] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const details_sold = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v342, v343, v347, v348, v356] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v342, v343, v347, v348, v374, v375, v382, v383] = svs;
      return (await ((async () => {
        
        
        return v375;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      details: {
        get: {
          decode: details_get,
          ty: ctc9
          },
        sold: {
          decode: details_sold,
          ty: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc5],
      4: [ctc0, ctc1, ctc2, ctc1, ctc3, ctc1, ctc5, ctc1]
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
    buyers_buy0_69: ctc9,
    owner_end0_69: ctc10
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
  
  
  const v322 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v323 = [v322];
  const v329 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:78:38:application',
    fs: ['at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)'],
    msg: 'getParams',
    who: 'VenueOrArtist'
    });
  const v330 = v329.eventLocation;
  const v331 = v329.eventName;
  const v332 = v329.eventSymbol;
  const v333 = v329.price;
  const v334 = v329.tok;
  const v335 = v329.tokAmt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v333, v331, v332, v330, v334, v335],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc5, ctc6, ctc4, ctc7, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v343, v344, v345, v346, v347, v348], secs: v350, time: v349, didSend: v44, from: v342 } = txn1;
      
      const v351 = v323[stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '0')];
      const v353 = v351[stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '1')];
      const v354 = v351[stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '2')];
      const v355 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v353, v354];
      const v356 = stdlib.Array_set(v323, stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '0'), v355);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v347
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
  const {data: [v343, v344, v345, v346, v347, v348], secs: v350, time: v349, didSend: v44, from: v342 } = txn1;
  const v351 = v323[stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '0')];
  const v353 = v351[stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '1')];
  const v354 = v351[stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '2')];
  const v355 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v353, v354];
  const v356 = stdlib.Array_set(v323, stdlib.checkedBigNumberify('./index.rsh:80:5:dot', stdlib.UInt_max, '0'), v355);
  ;
  ;
  stdlib.protect(ctc0, await interact.notify(), {
    at: './index.rsh:84:20:application',
    fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:13:function exp)'],
    msg: 'notify',
    who: 'VenueOrArtist'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v342, v343, v347, v348, v356],
    evt_cnt: 0,
    funcNum: 1,
    lct: v349,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'), [[v348, v347]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v362, time: v361, didSend: v54, from: v360 } = txn2;
      
      ;
      const v363 = v356[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
      const v364 = v363[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
      const v365 = stdlib.add(v364, v348);
      const v368 = v363[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '1')];
      const v369 = v363[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '2')];
      const v370 = [v365, v368, v369];
      const v371 = stdlib.Array_set(v356, stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'), v370);
      sim_r.txns.push({
        amt: v348,
        kind: 'to',
        tok: v347
        });
      const v374 = false;
      const v375 = stdlib.checkedBigNumberify('./index.rsh:92:47:decimal', stdlib.UInt_max, '0');
      const v376 = v361;
      const v382 = v371;
      const v383 = stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v386 = stdlib.gt(v348, v375);
        const v387 = v374 ? false : true;
        const v388 = v386 ? v387 : false;
        
        return v388;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v342,
          tok: undefined /* Nothing */
          });
        const v536 = v382[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
        const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v342,
          tok: v347
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v347
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
  const {data: [], secs: v362, time: v361, didSend: v54, from: v360 } = txn2;
  ;
  const v363 = v356[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
  const v364 = v363[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
  const v365 = stdlib.add(v364, v348);
  const v368 = v363[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '1')];
  const v369 = v363[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '2')];
  const v370 = [v365, v368, v369];
  const v371 = stdlib.Array_set(v356, stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'), v370);
  ;
  const v372 = stdlib.addressEq(v342, v360);
  stdlib.assert(v372, {
    at: './index.rsh:86:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'VenueOrArtist'
    });
  let v374 = false;
  let v375 = stdlib.checkedBigNumberify('./index.rsh:92:47:decimal', stdlib.UInt_max, '0');
  let v376 = v361;
  let v382 = v371;
  let v383 = stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v386 = stdlib.gt(v348, v375);
    const v387 = v374 ? false : true;
    const v388 = v386 ? v387 : false;
    
    return v388;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v422], secs: v424, time: v423, didSend: v215, from: v421 } = txn3;
    switch (v422[0]) {
      case 'buyers_buy0_69': {
        const v425 = v422[1];
        undefined /* setApiDetails */;
        const v430 = v425[stdlib.checkedBigNumberify('./index.rsh:98:9:spread', stdlib.UInt_max, '0')];
        const v431 = stdlib.mul(v430, v343);
        const v434 = stdlib.add(v383, v431);
        ;
        const v437 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v421), null);
        const v438 = {
          ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v439 = stdlib.fromSome(v437, v438);
        const v440 = v439.ticketsBought;
        const v441 = stdlib.add(v440, v430);
        const v442 = {
          ticketsBought: v441
          };
        await stdlib.mapSet(map0, v421, v442);
        const v443 = true;
        await txn3.getOutput('buyers_buy', 'v443', ctc12, v443);
        const v452 = stdlib.add(v375, v430);
        const cv374 = v374;
        const cv375 = v452;
        const cv376 = v423;
        const cv382 = v382;
        const cv383 = v434;
        
        v374 = cv374;
        v375 = cv375;
        v376 = cv376;
        v382 = cv382;
        v383 = cv383;
        
        continue;
        break;
        }
      case 'owner_end0_69': {
        const v478 = v422[1];
        undefined /* setApiDetails */;
        ;
        const v508 = v382[stdlib.checkedBigNumberify('./index.rsh:122:25:application', stdlib.UInt_max, '0')];
        const v509 = v508[stdlib.checkedBigNumberify('./index.rsh:122:25:application', stdlib.UInt_max, '0')];
        const v515 = stdlib.sub(v509, v509);
        const v518 = v508[stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '1')];
        const v519 = v508[stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '2')];
        const v520 = [v515, v518, v519];
        const v521 = stdlib.Array_set(v382, stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '0'), v520);
        ;
        const v522 = true;
        await txn3.getOutput('owner_end', 'v522', ctc12, v522);
        const v528 = true;
        null;
        const v529 = stdlib.add(v375, stdlib.checkedBigNumberify('./index.rsh:125:29:decimal', stdlib.UInt_max, '1'));
        const cv374 = true;
        const cv375 = v529;
        const cv376 = v423;
        const cv382 = v521;
        const cv383 = v383;
        
        v374 = cv374;
        v375 = cv375;
        v376 = cv376;
        v382 = cv382;
        v383 = cv383;
        
        continue;
        break;
        }
      }
    
    }
  ;
  const v536 = v382[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
  const v537 = v536[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
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
    buyers_buy0_69: ctc9,
    owner_end0_69: ctc10
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v342, v343, v347, v348, v374, v375, v382, v383] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v389 = ctc.selfAddress();
  const v391 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:92:42:application call to "runbuyers_buy0_69" (defined at: ./index.rsh:98:9:function exp)', 'at ./index.rsh:92:42:application call to [unknown function] (defined at: ./index.rsh:92:42:function exp)'],
    msg: 'in',
    who: 'buyers_buy'
    });
  const v392 = v391[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v395 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v389), null);
  const v396 = {
    ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v397 = stdlib.fromSome(v395, v396);
  const v398 = v397.ticketsBought;
  const v399 = stdlib.add(v398, v392);
  const v400 = stdlib.le(v399, stdlib.checkedBigNumberify('./index.rsh:103:34:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v400, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:11:function exp)', 'at ./index.rsh:92:42:application call to "runbuyers_buy0_69" (defined at: ./index.rsh:98:9:function exp)', 'at ./index.rsh:92:42:application call to [unknown function] (defined at: ./index.rsh:92:42:function exp)'],
    msg: 'Cannot purchase more Ticket exceeded',
    who: 'buyers_buy'
    });
  const v405 = ['buyers_buy0_69', v391];
  
  const v419 = stdlib.mul(v392, v343);
  
  const txn1 = await (ctc.sendrecv({
    args: [v342, v343, v347, v348, v374, v375, v382, v383, v405],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v419, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v422], secs: v424, time: v423, didSend: v215, from: v421 } = txn1;
      
      switch (v422[0]) {
        case 'buyers_buy0_69': {
          const v425 = v422[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyers_buy"
            });
          const v430 = v425[stdlib.checkedBigNumberify('./index.rsh:98:9:spread', stdlib.UInt_max, '0')];
          const v431 = stdlib.mul(v430, v343);
          const v434 = stdlib.add(v383, v431);
          sim_r.txns.push({
            amt: v431,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v437 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v421), null);
          const v438 = {
            ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v439 = stdlib.fromSome(v437, v438);
          const v440 = v439.ticketsBought;
          const v441 = stdlib.add(v440, v430);
          const v442 = {
            ticketsBought: v441
            };
          await stdlib.simMapSet(sim_r, 0, v421, v442);
          const v443 = true;
          const v444 = await txn1.getOutput('buyers_buy', 'v443', ctc6, v443);
          
          const v452 = stdlib.add(v375, v430);
          const v732 = v374;
          const v733 = v452;
          const v735 = v382;
          const v736 = v434;
          const v737 = stdlib.gt(v348, v452);
          const v738 = v374 ? false : true;
          const v739 = v737 ? v738 : false;
          if (v739) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: undefined /* Nothing */
              });
            const v740 = v382[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
            const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: v347
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v347
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'owner_end0_69': {
          const v478 = v422[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc5, ctc1, ctc6, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v422], secs: v424, time: v423, didSend: v215, from: v421 } = txn1;
  switch (v422[0]) {
    case 'buyers_buy0_69': {
      const v425 = v422[1];
      undefined /* setApiDetails */;
      const v430 = v425[stdlib.checkedBigNumberify('./index.rsh:98:9:spread', stdlib.UInt_max, '0')];
      const v431 = stdlib.mul(v430, v343);
      const v434 = stdlib.add(v383, v431);
      ;
      const v437 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v421), null);
      const v438 = {
        ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v439 = stdlib.fromSome(v437, v438);
      const v440 = v439.ticketsBought;
      const v441 = stdlib.add(v440, v430);
      const v442 = {
        ticketsBought: v441
        };
      await stdlib.mapSet(map0, v421, v442);
      const v443 = true;
      const v444 = await txn1.getOutput('buyers_buy', 'v443', ctc6, v443);
      if (v215) {
        stdlib.protect(ctc0, await interact.out(v425, v444), {
          at: './index.rsh:99:7:application',
          fs: ['at ./index.rsh:99:7:application call to [unknown function] (defined at: ./index.rsh:99:7:function exp)', 'at ./index.rsh:110:10:application call to "k" (defined at: ./index.rsh:106:16:function exp)', 'at ./index.rsh:106:16:application call to [unknown function] (defined at: ./index.rsh:106:16:function exp)'],
          msg: 'out',
          who: 'buyers_buy'
          });
        }
      else {
        }
      
      const v452 = stdlib.add(v375, v430);
      const v732 = v374;
      const v733 = v452;
      const v735 = v382;
      const v736 = v434;
      const v737 = stdlib.gt(v348, v452);
      const v738 = v374 ? false : true;
      const v739 = v737 ? v738 : false;
      if (v739) {
        return;
        }
      else {
        ;
        const v740 = v382[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
        const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'owner_end0_69': {
      const v478 = v422[1];
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
    buyers_buy0_69: ctc10,
    owner_end0_69: ctc9
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v342, v343, v347, v348, v374, v375, v382, v383] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v407 = ctc.selfAddress();
  const v409 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:117:10:application call to [unknown function] (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:92:42:application call to "runowner_end0_69" (defined at: ./index.rsh:115:9:function exp)', 'at ./index.rsh:92:42:application call to [unknown function] (defined at: ./index.rsh:92:42:function exp)'],
    msg: 'in',
    who: 'owner_end'
    });
  const v411 = stdlib.addressEq(v407, v342);
  stdlib.assert(v411, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:10:application call to [unknown function] (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:117:10:application call to [unknown function] (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:92:42:application call to "runowner_end0_69" (defined at: ./index.rsh:115:9:function exp)', 'at ./index.rsh:92:42:application call to [unknown function] (defined at: ./index.rsh:92:42:function exp)'],
    msg: 'You are not the Owner of this set',
    who: 'owner_end'
    });
  const v415 = ['owner_end0_69', v409];
  
  const txn1 = await (ctc.sendrecv({
    args: [v342, v343, v347, v348, v374, v375, v382, v383, v415],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:120:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v422], secs: v424, time: v423, didSend: v215, from: v421 } = txn1;
      
      switch (v422[0]) {
        case 'buyers_buy0_69': {
          const v425 = v422[1];
          
          break;
          }
        case 'owner_end0_69': {
          const v478 = v422[1];
          sim_r.txns.push({
            kind: 'api',
            who: "owner_end"
            });
          ;
          const v508 = v382[stdlib.checkedBigNumberify('./index.rsh:122:25:application', stdlib.UInt_max, '0')];
          const v509 = v508[stdlib.checkedBigNumberify('./index.rsh:122:25:application', stdlib.UInt_max, '0')];
          const v515 = stdlib.sub(v509, v509);
          const v518 = v508[stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '1')];
          const v519 = v508[stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '2')];
          const v520 = [v515, v518, v519];
          const v521 = stdlib.Array_set(v382, stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '0'), v520);
          sim_r.txns.push({
            kind: 'from',
            to: v421,
            tok: v347
            });
          const v522 = true;
          const v523 = await txn1.getOutput('owner_end', 'v522', ctc6, v522);
          
          const v528 = true;
          null;
          const v529 = stdlib.add(v375, stdlib.checkedBigNumberify('./index.rsh:125:29:decimal', stdlib.UInt_max, '1'));
          const v762 = true;
          const v763 = v529;
          const v765 = v521;
          const v766 = v383;
          const v767 = stdlib.gt(v348, v529);
          const v769 = v767 ? false : false;
          if (v769) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: undefined /* Nothing */
              });
            const v770 = v521[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
            const v771 = v770[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v342,
              tok: v347
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v347
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
    tys: [ctc4, ctc1, ctc5, ctc1, ctc6, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v422], secs: v424, time: v423, didSend: v215, from: v421 } = txn1;
  switch (v422[0]) {
    case 'buyers_buy0_69': {
      const v425 = v422[1];
      return;
      break;
      }
    case 'owner_end0_69': {
      const v478 = v422[1];
      undefined /* setApiDetails */;
      ;
      const v508 = v382[stdlib.checkedBigNumberify('./index.rsh:122:25:application', stdlib.UInt_max, '0')];
      const v509 = v508[stdlib.checkedBigNumberify('./index.rsh:122:25:application', stdlib.UInt_max, '0')];
      const v515 = stdlib.sub(v509, v509);
      const v518 = v508[stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '1')];
      const v519 = v508[stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '2')];
      const v520 = [v515, v518, v519];
      const v521 = stdlib.Array_set(v382, stdlib.checkedBigNumberify('./index.rsh:122:39:application', stdlib.UInt_max, '0'), v520);
      ;
      const v522 = true;
      const v523 = await txn1.getOutput('owner_end', 'v522', ctc6, v522);
      if (v215) {
        stdlib.protect(ctc0, await interact.out(v478, v523), {
          at: './index.rsh:116:7:application',
          fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:7:function exp)', 'at ./index.rsh:123:10:application call to "k" (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)'],
          msg: 'out',
          who: 'owner_end'
          });
        }
      else {
        }
      
      const v528 = true;
      null;
      const v529 = stdlib.add(v375, stdlib.checkedBigNumberify('./index.rsh:125:29:decimal', stdlib.UInt_max, '1'));
      const v762 = true;
      const v763 = v529;
      const v765 = v521;
      const v766 = v383;
      const v767 = stdlib.gt(v348, v529);
      const v769 = v767 ? false : false;
      if (v769) {
        return;
        }
      else {
        ;
        const v770 = v521[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
        const v771 = v770[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
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
  appApproval: `BiANAAEECAmr6vL9DbPcpaIPu8n7/gQDICgwoI0GJgMBAAEBACI1ADEYQQOuKmRJIls1ASVbNQIxGSMSQQAKMQAoIQSvZkIDezYaABdJQQBdIjUEIzUGSSEFDEAAHkkhBgxAAAchBhJENAEAIQUSRDYaATX/KDT/UEIAUEkhBwxAABEhBxJEKjX/KTT/UCWvUEIAOIHNgc3LAxJENAEkEkQoZEk1A1c5CDUHQgMlNhoCFzUENhoDNhoBF0kjDEABjEkhCAxAARUhCBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQlbNf4hCls1/SELWzX8gTlbNftXQRE1+oFSWzX5STUFNfiABJHxp5o0+FCwNPgiVUAAYzT4VwEINfc09xdJNfY0/gs19TT1iALTMQAoKSWvMQCIArlJNfRXAQg09CJVTSJbNPYIFlBmgAkAAAAAAAABuwGwKTUHNP80/jT9NPw0A1c4ARc0+zT2CDIGNPo0+TT1CEIBdzT6VwARSTX3Ils19rEisgE09rISJLIQMQCyFDT9shGzgAkAAAAAAAACCgGwKTUHgAUslx1kAbA0/zT+NP00/CM0+yMIMgY09kkJFjT3VwgIUDT3VxABUDT5QgEbIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEKWzX+IQtbNf1XOBE1/IAEmouRdLA0/FcAETX7NP00/ogCADT/MQASRDT/NAMhCVs0/jT9IiIyBjT7Ils0/QgWNPtXCAhQNPtXEAFQIkIAq0ghDIgBtSI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/VwggNf5XKAg1/VcwHjX8gU5bNfuBVls1+oAEkDEiQjT/FlA0/lA0/VA0/FA0+xZQNPoWULCBEa9JNflXABE1+CWvNPhXCAhQNPhXEAFQNfchDIgBRrEisgEishIkshAyCrIUNPuyEbMxADT/FlA0+xZQNPoWUDT3UChLAVcASWdIIzUBMgY1AkIArzX/Nf41/TX8Nfs1+jX5Nfg19zT6NPwNNPsUEEEAMjT3NPgWUDT5FlA0+hZQNPsWUQcIUDT8FlA0/lA0/xZQKEsBVwBaZ0gkNQEyBjUCQgBfsSKyATT/sggjshA097IHs7EisgE0/lcAESJbshIkshA097IUNPmyEbOxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghBK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 90,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:81:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:92:42:after expr stmt semicolon',
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

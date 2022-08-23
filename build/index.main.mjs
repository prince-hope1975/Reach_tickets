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
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Object({
    eventLocation: ctc6,
    eventMeta: ctc7,
    eventName: ctc7,
    eventSymbol: ctc8,
    eventUrl: ctc9,
    price: ctc1,
    tok: ctc2,
    tokAmt: ctc1
    });
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Struct([['ticketsBought', ctc1]]);
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  
  const details_get = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v352, v353, v359, v360, v368] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v352, v353, v359, v360, v386, v387, v394, v395] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const details_sold = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v352, v353, v359, v360, v368] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v352, v353, v359, v360, v386, v387, v394, v395] = svs;
      return (await ((async () => {
        
        
        return v387;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      details: {
        get: {
          decode: details_get,
          ty: ctc10
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
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Object({
    eventLocation: ctc4,
    eventMeta: ctc5,
    eventName: ctc5,
    eventSymbol: ctc6,
    eventUrl: ctc7,
    price: ctc1,
    tok: ctc8,
    tokAmt: ctc1
    });
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    buyers_buy0_75: ctc10,
    owner_end0_75: ctc11
    });
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Address;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc13]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v328 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v329 = [v328];
  const v335 = stdlib.protect(ctc9, await interact.getParams(), {
    at: './index.rsh:79:38:application',
    fs: ['at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)'],
    msg: 'getParams',
    who: 'VenueOrArtist'
    });
  const v336 = v335.eventLocation;
  const v337 = v335.eventMeta;
  const v338 = v335.eventName;
  const v339 = v335.eventSymbol;
  const v340 = v335.eventUrl;
  const v341 = v335.price;
  const v342 = v335.tok;
  const v343 = v335.tokAmt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v341, v338, v339, v340, v337, v336, v342, v343],
    evt_cnt: 8,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc5, ctc6, ctc7, ctc5, ctc4, ctc8, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v353, v354, v355, v356, v357, v358, v359, v360], secs: v362, time: v361, didSend: v50, from: v352 } = txn1;
      
      const v363 = v329[stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '0')];
      const v365 = v363[stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '1')];
      const v366 = v363[stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '2')];
      const v367 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v365, v366];
      const v368 = stdlib.Array_set(v329, stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '0'), v367);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v359
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc5, ctc6, ctc7, ctc5, ctc4, ctc8, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v353, v354, v355, v356, v357, v358, v359, v360], secs: v362, time: v361, didSend: v50, from: v352 } = txn1;
  const v363 = v329[stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '0')];
  const v365 = v363[stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '1')];
  const v366 = v363[stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '2')];
  const v367 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v365, v366];
  const v368 = stdlib.Array_set(v329, stdlib.checkedBigNumberify('./index.rsh:81:5:dot', stdlib.UInt_max, '0'), v367);
  ;
  ;
  stdlib.protect(ctc0, await interact.notify(), {
    at: './index.rsh:85:20:application',
    fs: ['at ./index.rsh:84:9:application call to [unknown function] (defined at: ./index.rsh:84:13:function exp)'],
    msg: 'notify',
    who: 'VenueOrArtist'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v352, v353, v359, v360, v368],
    evt_cnt: 0,
    funcNum: 1,
    lct: v361,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0'), [[v360, v359]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v374, time: v373, didSend: v60, from: v372 } = txn2;
      
      ;
      const v375 = v368[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0')];
      const v376 = v375[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0')];
      const v377 = stdlib.add(v376, v360);
      const v380 = v375[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '1')];
      const v381 = v375[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '2')];
      const v382 = [v377, v380, v381];
      const v383 = stdlib.Array_set(v368, stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0'), v382);
      sim_r.txns.push({
        amt: v360,
        kind: 'to',
        tok: v359
        });
      const v386 = false;
      const v387 = stdlib.checkedBigNumberify('./index.rsh:93:47:decimal', stdlib.UInt_max, '0');
      const v388 = v373;
      const v394 = v383;
      const v395 = stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v398 = stdlib.gt(v360, v387);
        const v399 = v386 ? false : true;
        const v400 = v398 ? v399 : false;
        
        return v400;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v352,
          tok: undefined /* Nothing */
          });
        const v548 = v394[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
        const v549 = v548[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v352,
          tok: v359
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v359
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
    tys: [ctc14, ctc1, ctc8, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v374, time: v373, didSend: v60, from: v372 } = txn2;
  ;
  const v375 = v368[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0')];
  const v376 = v375[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0')];
  const v377 = stdlib.add(v376, v360);
  const v380 = v375[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '1')];
  const v381 = v375[stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '2')];
  const v382 = [v377, v380, v381];
  const v383 = stdlib.Array_set(v368, stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0'), v382);
  ;
  const v384 = stdlib.addressEq(v352, v372);
  stdlib.assert(v384, {
    at: './index.rsh:87:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'VenueOrArtist'
    });
  let v386 = false;
  let v387 = stdlib.checkedBigNumberify('./index.rsh:93:47:decimal', stdlib.UInt_max, '0');
  let v388 = v373;
  let v394 = v383;
  let v395 = stdlib.checkedBigNumberify('./index.rsh:68:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v398 = stdlib.gt(v360, v387);
    const v399 = v386 ? false : true;
    const v400 = v398 ? v399 : false;
    
    return v400;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v434], secs: v436, time: v435, didSend: v221, from: v433 } = txn3;
    switch (v434[0]) {
      case 'buyers_buy0_75': {
        const v437 = v434[1];
        undefined /* setApiDetails */;
        const v442 = v437[stdlib.checkedBigNumberify('./index.rsh:99:9:spread', stdlib.UInt_max, '0')];
        const v443 = stdlib.mul(v442, v353);
        const v446 = stdlib.add(v395, v443);
        ;
        const v449 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v433), null);
        const v450 = {
          ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v451 = stdlib.fromSome(v449, v450);
        const v452 = v451.ticketsBought;
        const v453 = stdlib.add(v452, v442);
        const v454 = {
          ticketsBought: v453
          };
        await stdlib.mapSet(map0, v433, v454);
        const v455 = true;
        await txn3.getOutput('buyers_buy', 'v455', ctc13, v455);
        const v464 = stdlib.add(v387, v442);
        const cv386 = v386;
        const cv387 = v464;
        const cv388 = v435;
        const cv394 = v394;
        const cv395 = v446;
        
        v386 = cv386;
        v387 = cv387;
        v388 = cv388;
        v394 = cv394;
        v395 = cv395;
        
        continue;
        break;
        }
      case 'owner_end0_75': {
        const v490 = v434[1];
        undefined /* setApiDetails */;
        ;
        const v520 = v394[stdlib.checkedBigNumberify('./index.rsh:123:25:application', stdlib.UInt_max, '0')];
        const v521 = v520[stdlib.checkedBigNumberify('./index.rsh:123:25:application', stdlib.UInt_max, '0')];
        const v527 = stdlib.sub(v521, v521);
        const v530 = v520[stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '1')];
        const v531 = v520[stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '2')];
        const v532 = [v527, v530, v531];
        const v533 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '0'), v532);
        ;
        const v534 = true;
        await txn3.getOutput('owner_end', 'v534', ctc13, v534);
        const v540 = true;
        null;
        const v541 = stdlib.add(v387, stdlib.checkedBigNumberify('./index.rsh:126:29:decimal', stdlib.UInt_max, '1'));
        const cv386 = true;
        const cv387 = v541;
        const cv388 = v435;
        const cv394 = v533;
        const cv395 = v395;
        
        v386 = cv386;
        v387 = cv387;
        v388 = cv388;
        v394 = cv394;
        v395 = cv395;
        
        continue;
        break;
        }
      }
    
    }
  ;
  const v548 = v394[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
  const v549 = v548[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
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
    buyers_buy0_75: ctc9,
    owner_end0_75: ctc10
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v352, v353, v359, v360, v386, v387, v394, v395] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v401 = ctc.selfAddress();
  const v403 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:101:11:application call to [unknown function] (defined at: ./index.rsh:101:11:function exp)', 'at ./index.rsh:93:42:application call to "runbuyers_buy0_75" (defined at: ./index.rsh:99:9:function exp)', 'at ./index.rsh:93:42:application call to [unknown function] (defined at: ./index.rsh:93:42:function exp)'],
    msg: 'in',
    who: 'buyers_buy'
    });
  const v404 = v403[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v407 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v401), null);
  const v408 = {
    ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v409 = stdlib.fromSome(v407, v408);
  const v410 = v409.ticketsBought;
  const v411 = stdlib.add(v410, v404);
  const v412 = stdlib.le(v411, stdlib.checkedBigNumberify('./index.rsh:104:34:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v412, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:104:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:11:application call to [unknown function] (defined at: ./index.rsh:101:11:function exp)', 'at ./index.rsh:101:11:application call to [unknown function] (defined at: ./index.rsh:101:11:function exp)', 'at ./index.rsh:93:42:application call to "runbuyers_buy0_75" (defined at: ./index.rsh:99:9:function exp)', 'at ./index.rsh:93:42:application call to [unknown function] (defined at: ./index.rsh:93:42:function exp)'],
    msg: 'Cannot purchase more Ticket exceeded',
    who: 'buyers_buy'
    });
  const v417 = ['buyers_buy0_75', v403];
  
  const v431 = stdlib.mul(v404, v353);
  
  const txn1 = await (ctc.sendrecv({
    args: [v352, v353, v359, v360, v386, v387, v394, v395, v417],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v431, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v434], secs: v436, time: v435, didSend: v221, from: v433 } = txn1;
      
      switch (v434[0]) {
        case 'buyers_buy0_75': {
          const v437 = v434[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyers_buy"
            });
          const v442 = v437[stdlib.checkedBigNumberify('./index.rsh:99:9:spread', stdlib.UInt_max, '0')];
          const v443 = stdlib.mul(v442, v353);
          const v446 = stdlib.add(v395, v443);
          sim_r.txns.push({
            amt: v443,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v449 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v433), null);
          const v450 = {
            ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v451 = stdlib.fromSome(v449, v450);
          const v452 = v451.ticketsBought;
          const v453 = stdlib.add(v452, v442);
          const v454 = {
            ticketsBought: v453
            };
          await stdlib.simMapSet(sim_r, 0, v433, v454);
          const v455 = true;
          const v456 = await txn1.getOutput('buyers_buy', 'v455', ctc6, v455);
          
          const v464 = stdlib.add(v387, v442);
          const v744 = v386;
          const v745 = v464;
          const v747 = v394;
          const v748 = v446;
          const v749 = stdlib.gt(v360, v464);
          const v750 = v386 ? false : true;
          const v751 = v749 ? v750 : false;
          if (v751) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v352,
              tok: undefined /* Nothing */
              });
            const v752 = v394[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
            const v753 = v752[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v352,
              tok: v359
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v359
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'owner_end0_75': {
          const v490 = v434[1];
          
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
  const {data: [v434], secs: v436, time: v435, didSend: v221, from: v433 } = txn1;
  switch (v434[0]) {
    case 'buyers_buy0_75': {
      const v437 = v434[1];
      undefined /* setApiDetails */;
      const v442 = v437[stdlib.checkedBigNumberify('./index.rsh:99:9:spread', stdlib.UInt_max, '0')];
      const v443 = stdlib.mul(v442, v353);
      const v446 = stdlib.add(v395, v443);
      ;
      const v449 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v433), null);
      const v450 = {
        ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v451 = stdlib.fromSome(v449, v450);
      const v452 = v451.ticketsBought;
      const v453 = stdlib.add(v452, v442);
      const v454 = {
        ticketsBought: v453
        };
      await stdlib.mapSet(map0, v433, v454);
      const v455 = true;
      const v456 = await txn1.getOutput('buyers_buy', 'v455', ctc6, v455);
      if (v221) {
        stdlib.protect(ctc0, await interact.out(v437, v456), {
          at: './index.rsh:100:7:application',
          fs: ['at ./index.rsh:100:7:application call to [unknown function] (defined at: ./index.rsh:100:7:function exp)', 'at ./index.rsh:111:10:application call to "k" (defined at: ./index.rsh:107:16:function exp)', 'at ./index.rsh:107:16:application call to [unknown function] (defined at: ./index.rsh:107:16:function exp)'],
          msg: 'out',
          who: 'buyers_buy'
          });
        }
      else {
        }
      
      const v464 = stdlib.add(v387, v442);
      const v744 = v386;
      const v745 = v464;
      const v747 = v394;
      const v748 = v446;
      const v749 = stdlib.gt(v360, v464);
      const v750 = v386 ? false : true;
      const v751 = v749 ? v750 : false;
      if (v751) {
        return;
        }
      else {
        ;
        const v752 = v394[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
        const v753 = v752[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'owner_end0_75': {
      const v490 = v434[1];
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
    buyers_buy0_75: ctc10,
    owner_end0_75: ctc9
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v352, v353, v359, v360, v386, v387, v394, v395] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v419 = ctc.selfAddress();
  const v421 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:118:10:application call to [unknown function] (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:93:42:application call to "runowner_end0_75" (defined at: ./index.rsh:116:9:function exp)', 'at ./index.rsh:93:42:application call to [unknown function] (defined at: ./index.rsh:93:42:function exp)'],
    msg: 'in',
    who: 'owner_end'
    });
  const v423 = stdlib.addressEq(v419, v352);
  stdlib.assert(v423, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:10:application call to [unknown function] (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:118:10:application call to [unknown function] (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:93:42:application call to "runowner_end0_75" (defined at: ./index.rsh:116:9:function exp)', 'at ./index.rsh:93:42:application call to [unknown function] (defined at: ./index.rsh:93:42:function exp)'],
    msg: 'You are not the Owner of this set',
    who: 'owner_end'
    });
  const v427 = ['owner_end0_75', v421];
  
  const txn1 = await (ctc.sendrecv({
    args: [v352, v353, v359, v360, v386, v387, v394, v395, v427],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:121:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v434], secs: v436, time: v435, didSend: v221, from: v433 } = txn1;
      
      switch (v434[0]) {
        case 'buyers_buy0_75': {
          const v437 = v434[1];
          
          break;
          }
        case 'owner_end0_75': {
          const v490 = v434[1];
          sim_r.txns.push({
            kind: 'api',
            who: "owner_end"
            });
          ;
          const v520 = v394[stdlib.checkedBigNumberify('./index.rsh:123:25:application', stdlib.UInt_max, '0')];
          const v521 = v520[stdlib.checkedBigNumberify('./index.rsh:123:25:application', stdlib.UInt_max, '0')];
          const v527 = stdlib.sub(v521, v521);
          const v530 = v520[stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '1')];
          const v531 = v520[stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '2')];
          const v532 = [v527, v530, v531];
          const v533 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '0'), v532);
          sim_r.txns.push({
            kind: 'from',
            to: v433,
            tok: v359
            });
          const v534 = true;
          const v535 = await txn1.getOutput('owner_end', 'v534', ctc6, v534);
          
          const v540 = true;
          null;
          const v541 = stdlib.add(v387, stdlib.checkedBigNumberify('./index.rsh:126:29:decimal', stdlib.UInt_max, '1'));
          const v774 = true;
          const v775 = v541;
          const v777 = v533;
          const v778 = v395;
          const v779 = stdlib.gt(v360, v541);
          const v781 = v779 ? false : false;
          if (v781) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v352,
              tok: undefined /* Nothing */
              });
            const v782 = v533[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
            const v783 = v782[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v352,
              tok: v359
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v359
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
  const {data: [v434], secs: v436, time: v435, didSend: v221, from: v433 } = txn1;
  switch (v434[0]) {
    case 'buyers_buy0_75': {
      const v437 = v434[1];
      return;
      break;
      }
    case 'owner_end0_75': {
      const v490 = v434[1];
      undefined /* setApiDetails */;
      ;
      const v520 = v394[stdlib.checkedBigNumberify('./index.rsh:123:25:application', stdlib.UInt_max, '0')];
      const v521 = v520[stdlib.checkedBigNumberify('./index.rsh:123:25:application', stdlib.UInt_max, '0')];
      const v527 = stdlib.sub(v521, v521);
      const v530 = v520[stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '1')];
      const v531 = v520[stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '2')];
      const v532 = [v527, v530, v531];
      const v533 = stdlib.Array_set(v394, stdlib.checkedBigNumberify('./index.rsh:123:39:application', stdlib.UInt_max, '0'), v532);
      ;
      const v534 = true;
      const v535 = await txn1.getOutput('owner_end', 'v534', ctc6, v534);
      if (v221) {
        stdlib.protect(ctc0, await interact.out(v490, v535), {
          at: './index.rsh:117:7:application',
          fs: ['at ./index.rsh:117:7:application call to [unknown function] (defined at: ./index.rsh:117:7:function exp)', 'at ./index.rsh:124:10:application call to "k" (defined at: ./index.rsh:122:11:function exp)', 'at ./index.rsh:122:11:application call to [unknown function] (defined at: ./index.rsh:122:11:function exp)'],
          msg: 'out',
          who: 'owner_end'
          });
        }
      else {
        }
      
      const v540 = true;
      null;
      const v541 = stdlib.add(v387, stdlib.checkedBigNumberify('./index.rsh:126:29:decimal', stdlib.UInt_max, '1'));
      const v774 = true;
      const v775 = v541;
      const v777 = v533;
      const v778 = v395;
      const v779 = stdlib.gt(v360, v541);
      const v781 = v779 ? false : false;
      if (v781) {
        return;
        }
      else {
        ;
        const v782 = v533[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
        const v783 = v782[stdlib.checkedBigNumberify('./index.rsh:132:19:application', stdlib.UInt_max, '0')];
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
    pure: [`details_get()(byte[30],byte[32],byte[32],byte[8],byte[96],uint64,uint64,uint64)`, `details_sold()uint64`],
    sigs: [`buyers_buy(uint64)byte`, `details_get()(byte[30],byte[32],byte[32],byte[8],byte[96],uint64,uint64,uint64)`, `details_sold()uint64`, `owner_end()byte`]
    },
  appApproval: `BiANAAEECAmksqXBBavq8v0Nu8n7/gQDICgwoI0GJgMBAAEBACI1ADEYQQPBKmRJIls1ASVbNQIxGSMSQQAKMQAoIQSvZkIDjjYaABdJQQBdIjUEIzUGSSEFDEAAHkkhBgxAABAhBhJENhoBNf8oNP9QQgBXIQUSRDQBAEkhBwxAABEhBxJEKjX/KTT/UCWvUEIAOIHNgc3LAxJENAEkEkQoZEk1A1c5CDUHQgM4NhoCFzUENhoDNhoBF0kjDEABjEkhCAxAARUhCBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQlbNf4hCls1/SELWzX8gTlbNftXQRE1+oFSWzX5STUFNfiABJHxp5o0+FCwNPgiVUAAYzT4VwEINfc09xdJNfY0/gs19TT1iALmMQAoKSWvMQCIAsxJNfRXAQg09CJVTSJbNPYIFlBmgAkAAAAAAAABxwGwKTUHNP80/jT9NPw0A1c4ARc0+zT2CDIGNPo0+TT1CEIBijT6VwARSTX3Ils19rEisgE09rISJLIQMQCyFDT9shGzgAkAAAAAAAACFgGwKTUHgAUslx1kAbA0/zT+NP00/CM0+yMIMgY09kkJFjT3VwgIUDT3VxABUDT5QgEuIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEKWzX+IQtbNf1XOBE1/IAEmouRdLA0/FcAETX7NP00/ogCEzT/MQASRDT/NAMhCVs0/jT9IiIyBjT7Ils0/QgWNPtXCAhQNPtXEAFQIkIAvkghDIgByCI0ARJENARJIhJMNAISEURJNQVJSkpKIls1/1cIIDX+VygINf1XMGA1/FeQIDX7V7AeNfqBzgFbNfmB1gFbNfiABAncY7k0/xZQNP5QNP1QNPxQNPtQNPpQNPkWUDT4FlCwgRGvSTX3VwARNfYlrzT2VwgIUDT2VxABUDX1IQyIAUaxIrIBIrISJLIQMgqyFDT5shGzMQA0/xZQNPkWUDT4FlA09VAoSwFXAElnSCM1ATIGNQJCAK81/zX+Nf01/DX7Nfo1+TX4Nfc0+jT8DTT7FBBBADI09zT4FlA0+RZQNPoWUDT7FlEHCFA0/BZQNP5QNP8WUChLAVcAWmdIJDUBMgY1AkIAX7EisgE0/7III7IQNPeyB7OxIrIBNP5XABEiW7ISJLIQNPeyFDT5shGzsSKyASKyEiSyEDIJshUyCrIUNPmyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQSviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
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
    at: './index.rsh:82:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:133:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:93:42:after expr stmt semicolon',
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

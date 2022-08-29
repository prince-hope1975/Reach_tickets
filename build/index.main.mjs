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
      const [v328, v329, v333, v334, v339] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v328, v329, v333, v334, v352, v353, v354, v361, v362] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const details_sold = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v328, v329, v333, v334, v339] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v328, v329, v333, v334, v352, v353, v354, v361, v362] = svs;
      return (await ((async () => {
        
        
        return v354;}))(...args));
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
  
  
  const v308 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v309 = [v308];
  const v315 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:84:38:application',
    fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:13:function exp)'],
    msg: 'getParams',
    who: 'VenueOrArtist'
    });
  const v316 = v315.eventLocation;
  const v317 = v315.eventName;
  const v318 = v315.eventSymbol;
  const v319 = v315.price;
  const v320 = v315.tok;
  const v321 = v315.tokAmt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v319, v317, v318, v316, v320, v321],
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
      
      const {data: [v329, v330, v331, v332, v333, v334], secs: v336, time: v335, didSend: v44, from: v328 } = txn1;
      
      const v337 = v309[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
      const v338 = stdlib.Array_set(v337, '0', stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'));
      const v339 = stdlib.Array_set(v309, stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'), v338);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v333
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
  const {data: [v329, v330, v331, v332, v333, v334], secs: v336, time: v335, didSend: v44, from: v328 } = txn1;
  const v337 = v309[stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0')];
  const v338 = stdlib.Array_set(v337, '0', stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'));
  const v339 = stdlib.Array_set(v309, stdlib.checkedBigNumberify('./index.rsh:86:5:dot', stdlib.UInt_max, '0'), v338);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v328, v329, v333, v334, v339],
    evt_cnt: 0,
    funcNum: 1,
    lct: v335,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0'), [[v334, v333]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v343, time: v342, didSend: v51, from: v341 } = txn2;
      
      ;
      const v344 = v339[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
      const v345 = v344[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
      const v346 = stdlib.add(v345, v334);
      const v348 = stdlib.Array_set(v344, '0', v346);
      const v349 = stdlib.Array_set(v339, stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0'), v348);
      sim_r.txns.push({
        amt: v334,
        kind: 'to',
        tok: v333
        });
      
      const v352 = stdlib.checkedBigNumberify('./index.rsh:95:44:decimal', stdlib.UInt_max, '0');
      const v353 = false;
      const v354 = stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', stdlib.UInt_max, '0');
      const v355 = v342;
      const v361 = v349;
      const v362 = stdlib.checkedBigNumberify('./index.rsh:74:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v365 = stdlib.gt(v334, v354);
        const v366 = v353 ? false : true;
        const v367 = v365 ? v366 : false;
        
        return v367;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v328,
          tok: undefined /* Nothing */
          });
        const v509 = v361[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
        const v510 = v509[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v328,
          tok: v333
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v333
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
  const {data: [], secs: v343, time: v342, didSend: v51, from: v341 } = txn2;
  ;
  const v344 = v339[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
  const v345 = v344[stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0')];
  const v346 = stdlib.add(v345, v334);
  const v348 = stdlib.Array_set(v344, '0', v346);
  const v349 = stdlib.Array_set(v339, stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0'), v348);
  ;
  const v350 = stdlib.addressEq(v328, v341);
  stdlib.assert(v350, {
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
  
  let v352 = stdlib.checkedBigNumberify('./index.rsh:95:44:decimal', stdlib.UInt_max, '0');
  let v353 = false;
  let v354 = stdlib.checkedBigNumberify('./index.rsh:95:47:decimal', stdlib.UInt_max, '0');
  let v355 = v342;
  let v361 = v349;
  let v362 = stdlib.checkedBigNumberify('./index.rsh:74:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v365 = stdlib.gt(v334, v354);
    const v366 = v353 ? false : true;
    const v367 = v365 ? v366 : false;
    
    return v367;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v401], secs: v403, time: v402, didSend: v216, from: v400 } = txn3;
    switch (v401[0]) {
      case 'buyers_buy0_70': {
        const v404 = v401[1];
        undefined /* setApiDetails */;
        const v409 = v404[stdlib.checkedBigNumberify('./index.rsh:101:9:spread', stdlib.UInt_max, '0')];
        const v410 = stdlib.safeMul(v409, v329);
        const v413 = stdlib.add(v362, v410);
        ;
        const v416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v400), null);
        const v417 = {
          ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v418 = stdlib.fromSome(v416, v417);
        const v419 = v418.ticketsBought;
        const v420 = stdlib.safeAdd(v419, v409);
        const v421 = {
          ticketsBought: v420
          };
        await stdlib.mapSet(map0, v400, v421);
        const v422 = true;
        await txn3.getOutput('buyers_buy', 'v422', ctc12, v422);
        const v429 = stdlib.safeMul(v329, v409);
        const v430 = stdlib.safeAdd(v352, v429);
        const v431 = stdlib.safeAdd(v354, v409);
        const cv352 = v430;
        const cv353 = v353;
        const cv354 = v431;
        const cv355 = v402;
        const cv361 = v361;
        const cv362 = v413;
        
        v352 = cv352;
        v353 = cv353;
        v354 = cv354;
        v355 = cv355;
        v361 = cv361;
        v362 = cv362;
        
        continue;
        break;
        }
      case 'owner_end0_70': {
        const v454 = v401[1];
        undefined /* setApiDetails */;
        ;
        const v484 = v361[stdlib.checkedBigNumberify('./index.rsh:126:25:application', stdlib.UInt_max, '0')];
        const v485 = v484[stdlib.checkedBigNumberify('./index.rsh:126:25:application', stdlib.UInt_max, '0')];
        const v491 = stdlib.sub(v485, v485);
        const v493 = stdlib.Array_set(v484, '0', v491);
        const v494 = stdlib.Array_set(v361, stdlib.checkedBigNumberify('./index.rsh:126:39:application', stdlib.UInt_max, '0'), v493);
        ;
        const v495 = true;
        await txn3.getOutput('owner_end', 'v495', ctc12, v495);
        const v501 = true;
        null;
        const v502 = stdlib.safeAdd(v354, stdlib.checkedBigNumberify('./index.rsh:129:29:decimal', stdlib.UInt_max, '1'));
        const cv352 = v352;
        const cv353 = true;
        const cv354 = v502;
        const cv355 = v402;
        const cv361 = v494;
        const cv362 = v362;
        
        v352 = cv352;
        v353 = cv353;
        v354 = cv354;
        v355 = cv355;
        v361 = cv361;
        v362 = cv362;
        
        continue;
        break;
        }
      }
    
    }
  ;
  const v509 = v361[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
  const v510 = v509[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
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
  
  
  const [v328, v329, v333, v334, v352, v353, v354, v361, v362] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v368 = ctc.selfAddress();
  const v370 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:11:function exp)', 'at ./index.rsh:95:42:application call to "runbuyers_buy0_70" (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'in',
    who: 'buyers_buy'
    });
  const v371 = v370[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v374 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v368), null);
  const v375 = {
    ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v376 = stdlib.fromSome(v374, v375);
  const v377 = v376.ticketsBought;
  const v378 = stdlib.safeAdd(v377, v371);
  const v379 = stdlib.le(v378, stdlib.checkedBigNumberify('./index.rsh:106:34:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v379, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:106:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:11:function exp)', 'at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:11:function exp)', 'at ./index.rsh:95:42:application call to "runbuyers_buy0_70" (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'Cannot purchase more Ticket exceeded',
    who: 'buyers_buy'
    });
  const v384 = ['buyers_buy0_70', v370];
  
  const v398 = stdlib.safeMul(v371, v329);
  
  const txn1 = await (ctc.sendrecv({
    args: [v328, v329, v333, v334, v352, v353, v354, v361, v362, v384],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v398, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v401], secs: v403, time: v402, didSend: v216, from: v400 } = txn1;
      
      switch (v401[0]) {
        case 'buyers_buy0_70': {
          const v404 = v401[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyers_buy"
            });
          const v409 = v404[stdlib.checkedBigNumberify('./index.rsh:101:9:spread', stdlib.UInt_max, '0')];
          const v410 = stdlib.safeMul(v409, v329);
          const v413 = stdlib.add(v362, v410);
          sim_r.txns.push({
            amt: v410,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v416 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v400), null);
          const v417 = {
            ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v418 = stdlib.fromSome(v416, v417);
          const v419 = v418.ticketsBought;
          const v420 = stdlib.safeAdd(v419, v409);
          const v421 = {
            ticketsBought: v420
            };
          await stdlib.simMapSet(sim_r, 0, v400, v421);
          const v422 = true;
          const v423 = await txn1.getOutput('buyers_buy', 'v422', ctc6, v422);
          
          const v429 = stdlib.safeMul(v329, v409);
          const v430 = stdlib.safeAdd(v352, v429);
          const v431 = stdlib.safeAdd(v354, v409);
          const v702 = v430;
          const v703 = v353;
          const v704 = v431;
          const v706 = v361;
          const v707 = v413;
          const v708 = stdlib.gt(v334, v431);
          const v709 = v353 ? false : true;
          const v710 = v708 ? v709 : false;
          if (v710) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v328,
              tok: undefined /* Nothing */
              });
            const v711 = v361[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
            const v712 = v711[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v328,
              tok: v333
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v333
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
          const v454 = v401[1];
          
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
  const {data: [v401], secs: v403, time: v402, didSend: v216, from: v400 } = txn1;
  switch (v401[0]) {
    case 'buyers_buy0_70': {
      const v404 = v401[1];
      undefined /* setApiDetails */;
      const v409 = v404[stdlib.checkedBigNumberify('./index.rsh:101:9:spread', stdlib.UInt_max, '0')];
      const v410 = stdlib.safeMul(v409, v329);
      const v413 = stdlib.add(v362, v410);
      ;
      const v416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v400), null);
      const v417 = {
        ticketsBought: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v418 = stdlib.fromSome(v416, v417);
      const v419 = v418.ticketsBought;
      const v420 = stdlib.safeAdd(v419, v409);
      const v421 = {
        ticketsBought: v420
        };
      await stdlib.mapSet(map0, v400, v421);
      const v422 = true;
      const v423 = await txn1.getOutput('buyers_buy', 'v422', ctc6, v422);
      if (v216) {
        stdlib.protect(ctc0, await interact.out(v404, v423), {
          at: './index.rsh:102:7:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:7:function exp)', 'at ./index.rsh:115:10:application call to "k" (defined at: ./index.rsh:109:16:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:16:function exp)'],
          msg: 'out',
          who: 'buyers_buy'
          });
        }
      else {
        }
      
      const v429 = stdlib.safeMul(v329, v409);
      const v430 = stdlib.safeAdd(v352, v429);
      const v431 = stdlib.safeAdd(v354, v409);
      const v702 = v430;
      const v703 = v353;
      const v704 = v431;
      const v706 = v361;
      const v707 = v413;
      const v708 = stdlib.gt(v334, v431);
      const v709 = v353 ? false : true;
      const v710 = v708 ? v709 : false;
      if (v710) {
        return;
        }
      else {
        ;
        const v711 = v361[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
        const v712 = v711[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'owner_end0_70': {
      const v454 = v401[1];
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
  
  
  const [v328, v329, v333, v334, v352, v353, v354, v361, v362] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc1, ctc5, ctc1, ctc1, ctc6, ctc1, ctc8, ctc1]);
  const v386 = ctc.selfAddress();
  const v388 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:121:10:application call to [unknown function] (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:95:42:application call to "runowner_end0_70" (defined at: ./index.rsh:119:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'in',
    who: 'owner_end'
    });
  const v390 = stdlib.addressEq(v386, v328);
  stdlib.assert(v390, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:10:application call to [unknown function] (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:121:10:application call to [unknown function] (defined at: ./index.rsh:121:10:function exp)', 'at ./index.rsh:95:42:application call to "runowner_end0_70" (defined at: ./index.rsh:119:9:function exp)', 'at ./index.rsh:95:42:application call to [unknown function] (defined at: ./index.rsh:95:42:function exp)'],
    msg: 'You are not the Owner of this set',
    who: 'owner_end'
    });
  const v394 = ['owner_end0_70', v388];
  
  const txn1 = await (ctc.sendrecv({
    args: [v328, v329, v333, v334, v352, v353, v354, v361, v362, v394],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:124:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v401], secs: v403, time: v402, didSend: v216, from: v400 } = txn1;
      
      switch (v401[0]) {
        case 'buyers_buy0_70': {
          const v404 = v401[1];
          
          break;
          }
        case 'owner_end0_70': {
          const v454 = v401[1];
          sim_r.txns.push({
            kind: 'api',
            who: "owner_end"
            });
          ;
          const v484 = v361[stdlib.checkedBigNumberify('./index.rsh:126:25:application', stdlib.UInt_max, '0')];
          const v485 = v484[stdlib.checkedBigNumberify('./index.rsh:126:25:application', stdlib.UInt_max, '0')];
          const v491 = stdlib.sub(v485, v485);
          const v493 = stdlib.Array_set(v484, '0', v491);
          const v494 = stdlib.Array_set(v361, stdlib.checkedBigNumberify('./index.rsh:126:39:application', stdlib.UInt_max, '0'), v493);
          sim_r.txns.push({
            kind: 'from',
            to: v400,
            tok: v333
            });
          const v495 = true;
          const v496 = await txn1.getOutput('owner_end', 'v495', ctc6, v495);
          
          const v501 = true;
          null;
          const v502 = stdlib.safeAdd(v354, stdlib.checkedBigNumberify('./index.rsh:129:29:decimal', stdlib.UInt_max, '1'));
          const v735 = v352;
          const v736 = true;
          const v737 = v502;
          const v739 = v494;
          const v740 = v362;
          const v741 = stdlib.gt(v334, v502);
          const v743 = v741 ? false : false;
          if (v743) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v328,
              tok: undefined /* Nothing */
              });
            const v744 = v494[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
            const v745 = v744[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v328,
              tok: v333
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v333
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
  const {data: [v401], secs: v403, time: v402, didSend: v216, from: v400 } = txn1;
  switch (v401[0]) {
    case 'buyers_buy0_70': {
      const v404 = v401[1];
      return;
      break;
      }
    case 'owner_end0_70': {
      const v454 = v401[1];
      undefined /* setApiDetails */;
      ;
      const v484 = v361[stdlib.checkedBigNumberify('./index.rsh:126:25:application', stdlib.UInt_max, '0')];
      const v485 = v484[stdlib.checkedBigNumberify('./index.rsh:126:25:application', stdlib.UInt_max, '0')];
      const v491 = stdlib.sub(v485, v485);
      const v493 = stdlib.Array_set(v484, '0', v491);
      const v494 = stdlib.Array_set(v361, stdlib.checkedBigNumberify('./index.rsh:126:39:application', stdlib.UInt_max, '0'), v493);
      ;
      const v495 = true;
      const v496 = await txn1.getOutput('owner_end', 'v495', ctc6, v495);
      if (v216) {
        stdlib.protect(ctc0, await interact.out(v454, v496), {
          at: './index.rsh:120:7:application',
          fs: ['at ./index.rsh:120:7:application call to [unknown function] (defined at: ./index.rsh:120:7:function exp)', 'at ./index.rsh:127:10:application call to "k" (defined at: ./index.rsh:125:11:function exp)', 'at ./index.rsh:125:11:application call to [unknown function] (defined at: ./index.rsh:125:11:function exp)'],
          msg: 'out',
          who: 'owner_end'
          });
        }
      else {
        }
      
      const v501 = true;
      null;
      const v502 = stdlib.safeAdd(v354, stdlib.checkedBigNumberify('./index.rsh:129:29:decimal', stdlib.UInt_max, '1'));
      const v735 = v352;
      const v736 = true;
      const v737 = v502;
      const v739 = v494;
      const v740 = v362;
      const v741 = stdlib.gt(v334, v502);
      const v743 = v741 ? false : false;
      if (v743) {
        return;
        }
      else {
        ;
        const v744 = v494[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
        const v745 = v744[stdlib.checkedBigNumberify('./index.rsh:135:19:application', stdlib.UInt_max, '0')];
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
  appApproval: `BiANAAEECAmr6vL9DbPcpaIPu8n7/gQDICgwoI0GJgMBAAEBACI1ADEYQQO2KmRJIls1ASVbNQIxGSMSQQAKMQAoIQSvZkIDgzYaABdJQQBdIjUEIzUGSSEFDEAAHkkhBgxAAAchBhJENAEAIQUSRDYaATX/KDT/UEIAUEkhBwxAABEhBxJEKjX/KTT/UCWvUEIAOIHNgc3LAxJENAEkEkQoZEk1A1dBCDUHQgMtNhoCFzUENhoDNhoBF0kjDEABmEkhCAxAASIhCBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/IQlbNf4hCls1/SELWzX8gThbNfuBQVs1+ldJETX5gVpbNfhJNQU194AEkfGnmjT3ULA09yJVQABqNPdXAQg19jT2F0k19TT+CzX0NPSIAtYxACgpJa8xAIgCvEk181cBCDTzIlVNFzT1CBZQZoAJAAAAAAAAAaYBsCk1BzT/NP40/TT8NPs0/jT1Cwg0A1dAARc0+jT1CDIGNPk0+DT0CEIBcjT5VwARSTX2Ils19bEisgE09bISJLIQMQCyFDT9shGzgAkAAAAAAAAB7wGwKTUHgAUslx1kAbA0/zT+NP00/DT7IzT6IwgyBjT2NPVJCRY19FcICTT0TFA0+EIBFSMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hCls1/iELWzX9VzgRNfyABJqLkXSwNPxXABE1+zT9NP6IAfs0/zEAEkQ0/zQDIQlbNP40/SIiIjIGNPtJIls0/QgWNfpXCAk0+kxQIkIApkghDIgBsSI0ARJENARJIhJMNAISEURJNQVJSkoiWzX/VwggNf5XKAg1/VcwHjX8gU5bNfuBVls1+oAEkDEiQjT/FlA0/lA0/VA0/FA0+xZQNPoWULCBEa9JNflXABElrzX3VwgJNPdMUDX4IQyIAUexIrIBIrISJLIQMgqyFDT7shGzMQA0/xZQNPsWUDT6FlA0+FAoSwFXAElnSCM1ATIGNQJCALA1/zX+Nf01/DX7Nfo1+TX4Nfc19jT5NPwNNPsUEEEAMTT2NPcWUDT4FlA0+RZQNPoWUChQNPwWUDT+UDT/FlAoSwFXAGJnSCQ1ATIGNQJCAF+xIrIBNP+yCCOyEDT2sgezsSKyATT+VwARIluyEiSyEDT2shQ0+LIRs7EisgEishIkshAyCbIVMgqyFDT4shGzQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEEr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
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
    at: './index.rsh:136:11:after expr stmt semicolon',
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

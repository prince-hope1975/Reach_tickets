import React, { useEffect, useState } from "react";
import * as backend from "../build/index.main.mjs";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
import { getStringFromErr, motionVariants } from "../helpers";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../Components/Loading";
import { modalType, useGlobalContext } from "../context";
import Main from "../Components/App";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const contractInfo = { _hex: "0x0640fa42", _isBigNumber: true };
let position: number;

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);
const arr = Array(100)
  .fill(0)
  .map((_, index) => index);
// App

const App = () => {
  // TODO  Add functionality to loop game until a winner is found
  //  The backend will send a bool and a number so check if that number equals your number, if it does then you win else you lose

  const { wallet, displayMessage, isConnected, Api, turnOffPopup } = useGlobalContext();

  // useEffect(() => {
  //   if (isConnected && Api.acc) {
  //     call();
  //   }
  // }, [Api]);

  // const call = async () => {
  //   let loopContinue = !!Api;
  //   while (loopContinue) {
  //     const [loop, out] = await Api.getResult()();
  //     // @ts-ignore
  //     const outcome = Number(parseInt(out));
  //     if (loop) {
  //       displayMessage(true, <Loading text={"The Game Ended in a Draw"} />);
  //       await turnOffPopup(3);
  //       continue;
  //     }
  //     if (outcome !== 1) {
  //       const psb = [[]];
  //       console.table({ out, outcome });
  //       displayMessage(true, <Loading text={"word"} />);
  //       await turnOffPopup(3);
  //     } else {
  //       displayMessage(true, <Loading text={"The Game Ended in a Draw"} />);
  //       await turnOffPopup(3);
  //     }
  //   }
  // };

  const deploy = async ({
    supply,
    eventName,
    eventSymbol,
    // eventUrl,
    // eventMeta,
    eventLocation,
  }: {
    supply: number;
    // id: number | string;
    eventName: string;
    eventSymbol: string;
    eventUrl?: string;
    eventMeta?: string;
    eventLocation: string;
  }) => {
    
    const ctcDeployer = wallet?.contract(backend);

    try {
      const nft = await reach.launchToken(wallet, eventName, eventSymbol, {
        supply,
        decimals: 0,
        // url: eventUrl,
      });
      await Promise.all([
        // @ts-ignore
        backend.VenueOrArtist(ctcDeployer, {
          notify: () => {
            displayMessage(true, "You Just successfully Created Your set");
            // throw 42;
          },
          getParams: async () => {
            return {
              price: reach.parseCurrency(40),
              tokAmt: supply,
              tok: nft.id,
              eventName,
              eventSymbol,
              eventLocation,
            };
          },
        }),
      ]);
    } catch (error) {
      if (error !== 42) console.log(error);
    }
    console.log(await ctcDeployer.getInfo());
  };

 

  return <Main />;
};

export default App;

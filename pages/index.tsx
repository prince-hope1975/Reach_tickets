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

  useEffect(() => {
    if (isConnected && Api.acc) {
      call();
    }
  }, [Api]);

  const call = async () => {
    let loopContinue = !!Api;
    while (loopContinue) {
      const [loop, out] = await Api.getResult()();
      // @ts-ignore
      const outcome = Number(parseInt(out));
      if (loop) {
        displayMessage(true, <Loading text={"The Game Ended in a Draw"} />);
        await turnOffPopup(3);
        continue;
      }
      if (outcome !== 1) {
        const psb = [[]];
        console.table({ out, outcome });
        displayMessage(true, <Loading text={"word"} />);
        await turnOffPopup(3);
      } else {
        displayMessage(true, <Loading text={"The Game Ended in a Draw"} />);
        await turnOffPopup(3);
      }
    }
  };

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
      console.log(await ctcDeployer.getInfo());
    } catch (error) {
      if (error !== 42) console.log(error);
      console.log(await ctcDeployer.getInfo());
    }
    console.log(await ctcDeployer.getInfo());
  };

 

  return <Main />;
};

// const Header = ({
//   gameStarted,
//   isConnected,
//   DisconnectWallet,
//   connectWallet,
// }: {
//   gameStarted: boolean;
//   isConnected: boolean;
//   DisconnectWallet: () => void;
//   connectWallet: () => void;
// }) => {
//   return (
//     <header className="w-full h-[4rem] md:h-[7rem] p-2   shadow-md flex items-center  bg-white justify-between text-lg uppercase cursor-pointer text-black">
//       <p onClick={() => null}>Morra</p>
//       {gameStarted && (
//         <div className=" text-gray-100 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200 text-[10px] leading-tight flex items-center justify-center text-center px-1 py-2  sm:text-sm sm:py-2 sm:px-3 ">
//           Quit game
//         </div>
//       )}
//       {gameStarted && (
//         <div
//           onClick={() => null}
//           className=" text-gray-100 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200 text-[10px] leading-tight flex items-center justify-center text-center px-1 py-2  sm:text-sm sm:py-2 sm:px-3  "
//         >
//           game view
//         </div>
//       )}
//       {isConnected ? (
//         <div
//           onClick={DisconnectWallet}
//           className=" text-gray-100 py-2 px-3 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200"
//         >
//           Disconnect
//         </div>
//       ) : (
//         <div
//           onClick={connectWallet}
//           className="  text-gray-100 hover:scale-75 bg-blue-600  rounded shadow-sm transform ease-in-out duration-200 text-[10px] leading-tight flex items-center justify-center text-center px-1 py-2  sm:text-sm sm:py-2 sm:px-3 "
//         >
//           Connect{" "}
//         </div>
//       )}
//     </header>
//   );
// };
export default App;

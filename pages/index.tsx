import React, { useEffect, useState } from "react";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
import { getStringFromErr, motionVariants } from "../helpers";

import Main from "../Components/App";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);
const App = () => {
  // TODO  Add functionality to loop game until a winner is found
  //  The backend will send a bool and a number so check if that number equals your number, if it does then you win else you lose
  return <Main />;
};

export default App;

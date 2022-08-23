import React, {
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import {  writeData } from "./helpers/index";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
import * as backend from "./smartcontract/build/index.main.mjs";

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);
export type modalType = "launch" | "message" | "buy" | "none";

const AppContext = React.createContext(
  {} as {
    state: any;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setState: React.Dispatch<React.SetStateAction<{}>>;
    wallet: any;
    setWallet: React.Dispatch<React.SetStateAction<{}>>;
    modalMessage: any;
    setModalMessage: React.Dispatch<any>;
    view: modalType;
    setView: React.Dispatch<React.SetStateAction<modalType>>;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    deploy: (
      {
        supply,
        eventName,
        eventSymbol,
        eventLocation,
        price,
      }: {
        supply: number;
        price: number;
        eventName: string;
        eventSymbol: string;
        eventUrl?: string | undefined;
        eventMeta?: string | undefined;
        eventLocation: string;
      },
      wall: any
    ) => Promise<void>;
    turnOffPopup: (seconds: number, executable?: () => any) => Promise<void>;
    displayMessage: (
      show: boolean,
      message?: string | JSX.Element,
      options?: {
        type: modalType;
      }
    ) => void;
    isConnected: boolean;
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
    Api: {
      buy: (somn: number) => Promise<any>;
      end: () => Promise<any>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      getResult: () => () => Promise<
        [shouldEnd: boolean, outcome: string | number] | any
      >;
      quitEvent: () => () => Promise<any>;
      acc: any;
    };
    connectWallet: () => Promise<void>;
    DisconnectWallet: () => void;
  }
);
export const AppProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(false);
  const [contractInfo, setContractInfo] = useState("" as string);

  const [state, setState] = useState({});
  const [wallet, setWallet] = useState({} as any);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Hello" as any);
  const [view, setView] = useState<modalType>("none");
  const [isOpen, setOpen] = useState(false);
  const [Api, setApi] = useState(
    {} as {
      buy: (somn: number) => Promise<any>;
      end: () => Promise<any>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      getResult: () => () => Promise<
        [shouldEnd: boolean, outcome: string | number] | any
      >;
      quitEvent: () => () => Promise<any>;
      acc: any;
    }
  );
  const displayMessage = (
    show: boolean,
    message?: string | JSX.Element,
    options?: { type: modalType }
  ) => {
    setShowModal(show);
    setView(options?.type ?? show ? "message" : "none");
    setModalMessage(message);
  };
  const connectWallet = async () => {
    try {
      const acct = await BUYER();
      setWallet(acct.acc);
      setApi(acct);
      setIsConnected(true);
      console.log(acct);
      return acct.acc;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const deploy = async (
    {
      supply,
      eventName,
      eventSymbol,
      eventLocation,
      price,
    }: {
      supply: number;
      price: number;
      // id: number | string;
      eventName: string;
      eventSymbol: string;
      eventUrl?: string;
      eventMeta?: string;
      eventLocation: string;
    },
    wall?: any
  ) => {
    const ctcDeployer = wall?.contract(backend) ?? wallet?.contract(backend);

    try {
      displayMessage(
        true,
        `${supply} Tickets being Minted, Please sign the requested transactions...`
      );
      await turnOffPopup(4);
      const nft = await reach.launchToken(wallet, eventName, eventSymbol, {
        supply,
        decimals: 0,
        // url: eventUrl,
      });
      await turnOffPopup(1);
      displayMessage(true, `Minted 🥳️🎉️`);
      await turnOffPopup(1);
      await turnOffPopup(1);
      displayMessage(
        true,
        `We are transferring your Tickets to our Marketplace, approve the upcoming transaction`
      );

      await Promise.all([
        // @ts-ignore
        backend.VenueOrArtist(ctcDeployer, {
          notify: async () => {
            displayMessage(true, "Almost Done, just a little longer");
            const info = await ctcDeployer.getInfo();
            displayMessage(true, "Almost Done, just a little longer");
            await writeData({
              contractID: info,
              id: nft.id,
              eventName,
              eventSymbol,
              supply,
              price,
              eventLocation,
            });
            displayMessage(true, "You Just successfully Created Your set");

            // throw 42;
          },
          getParams: async () => {
            return {
              price: reach.parseCurrency(price),
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
      displayMessage(true, "An error occured");
      console.log(await ctcDeployer.getInfo());
    }
    console.log(await ctcDeployer.getInfo());
  };

  const turnOffPopup = async (seconds: number, executable?: () => any) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        displayMessage(false);
        executable && executable();
        resolve(null);
      }, seconds * 1000)
    );
  };
  const DisconnectWallet = () => {
    window.localStorage.removeItem("walletconnect");
    setIsConnected(false);
  };
  const BUYER = async () => {
    const acc = await reach.getDefaultAccount();
    const ctc = () =>
      acc.contract(
        backend,
        // @ts-ignore
        reach.bigNumberToNumber(contractInfo)
      );

    const buy = async (howMany: number) => {
      try {
        const statement = await ctc().apis.buyers.buy(howMany);
        console.log(statement);
        return statement;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const end = async () => {
      try {
        const statement = await ctc().apis.owner.end();
        console.log(statement);
        return statement;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const getBalance = async () => {
      return await reach.balanceOf(acc);
    };

    const displayBalance = async () => {
      const bal = await getBalance();
      console.log(`s balance: ${reach.formatCurrency(bal, 4)}`);
    };
    const getResult = () => async () => {
      const {
        when,
        what,
      }: {
        when: number;
        what: [shouldEnd: boolean, outcome: number | string];
      } = await ctc().e.game_state.over.next();
      const lastTime = await ctc().e.game_state.over.lastTime();
      console.log("what", what);
      if (JSON.stringify(lastTime) == JSON.stringify(when)) return what;
    };

    const quitEvent = () => async () => {
      const { when, what } = await ctc().e.game_state.quit.next();
      const lastTime = await ctc().e.game_state.quit.lastTime();
      console.log("what", what);
      if (JSON.stringify(lastTime) == JSON.stringify(when)) return what;
    };

    return {
      buy,
      end,
      getBalance,
      displayBalance,
      getResult,
      quitEvent,
      acc,
    };
  };

  // useEffect(() => {
  //   console.log(isConnected);
  // }, [isConnected]);
  return (
    <AppContext.Provider
      value={{
        Api,
        DisconnectWallet,
        deploy,
        turnOffPopup,
        connectWallet,
        state,
        setState,
        wallet,
        setWallet,
        modalMessage,
        setModalMessage,
        showModal,
        setShowModal,
        view,
        isOpen,
        setOpen,
        setView,
        displayMessage,
        isConnected,
        setIsConnected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);

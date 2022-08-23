import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../../styles/create.module.scss";
import Image from "next/image";
import { useGlobalContext } from "../../context";
import { useRouter } from "next/router";
import Loading from "../../Components/Loading";

const Create = () => {
  const { isConnected, displayMessage, connectWallet, turnOffPopup } =
    useGlobalContext();

  const [fxn, setFxn] = React.useState("" as any);
  const [connect, setConnect] = useState(true);
  const router = useRouter();
  const handleCreate = () => {
    if (connect) {
      console.log("not connected");
      displayMessage(true, <NotConnected />);
      return;
    }
    console.log("connected");
    router.push("/mint");
  };
  const handleConnect = async () => {
    try {
      await connectWallet();
      await turnOffPopup(1);
      displayMessage(true, <Proceed />);
      await turnOffPopup(1);
      router.push("/mint");
    } catch (error) {
      displayMessage(true, <Loading text={"Error connecting Wallet"} />);
      await turnOffPopup(4);
      console.log(error);
    }
  };
  const handleConnectBuy = async () => {
    try {
      await connectWallet();
      await turnOffPopup(1);
      displayMessage(true, <Proceed />);
      await turnOffPopup(1);
      router.push("/buy");
    } catch (error) {
      displayMessage(true, <Loading text={"Error connecting Wallet"} />);
      await turnOffPopup(4);
      console.log(error);
    }
  };
  const handleBuy = () => {
    if (connect) {
      console.log("not connected");
      displayMessage(true, <NotConnected onClick={handleConnectBuy} />);
      return;
    }
    router.push("/buy");
  };

  React.useLayoutEffect(() => {}, [isConnected]);

  const NotConnected = ({ onClick }: { onClick?: () => any }) => {
    return (
      <div className={styles.proceed}>
        <p>Wallet Not connected</p>
        <Btn onClick={onClick ?? handleConnect}>Connect</Btn>
      </div>
    );
  };
  const Proceed = () => {
    return (
      <div className={styles.proceed}>
        <p>Wallet Connected</p>

        <Btn onClick={() => null}>Proceed</Btn>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          type: "tween",
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className={styles.head}
      >
        Join the new World and create your first Set
      </motion.div>

      <section>
        <Options func={handleCreate} />
        <Options
          func={handleBuy}
          btn="Buy"
          src="/weirdo.png"
          text="Buy Ticket For Event"
        />
      </section>
    </div>
  );
};

const Options = ({
  src,
  text,
  btn,
  func,
}: {
  src?: string;
  text?: string;
  btn?: string;
  func: () => any;
}) => {
  return (
    <div className={styles.options}>
      <div className={styles.img}>
        <Image src={src ?? "/monkey.png"} height={300} width={250} />
      </div>
      <p>{text ?? "Create your own set"}</p>

      <Btn onClick={() => func()}>{btn ?? "Create Now"}</Btn>
    </div>
  );
};

const Btn = ({ children, onClick }: { children: any; onClick: () => any }) => {
  return (
    <motion.div onClick={onClick} className={styles.btn}>
      {children}
    </motion.div>
  );
};

export default Create;

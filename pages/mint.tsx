import { InputProps } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "../styles/mint.module.scss";
import { useGlobalContext } from "../context";
import { useRouter } from "next/router";

function Send() {
  const [eventName, setName] = useState("");
  const [eventSymbol, setSymbol] = useState("");
  const [eventLocation, setLocation] = useState("");
  const [supply, setSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const { wallet, displayMessage, Api, deploy, connectWallet, turnOffPopup } =
    useGlobalContext();
  // This will be used to route after actions have completed
  const router = useRouter();
  // Handles input change event and updates state
  async function handleClick(event: Event) {
    event.preventDefault();
    // @ts-ignore
    if (!eventName || !eventSymbol || !supply) {
      displayMessage(true, "All field need to be filled");
      return;
    }
    const acct = await connectWallet();
    try {
      // The function is here to abstract the deployment process for us
      // It  - collects all the data needed
      //     - Creates NFTs proportional to the amount specified
      //     - Creates a contract and moves all the NFTs there
      //    -  Stores all the data needed

      await deploy(
        { eventLocation, eventName, eventSymbol, price, supply },
        acct
      );
      displayMessage(true, "Redirecting you to our market place");
      await turnOffPopup(4);
      router.push("/buy");
    } catch (error) {
      console.log(error);
      displayMessage(true, "An error occured during minting");
    }
  }
  const handleSubmit = async () => {};
  // useEffect(() => {
  //   (async () => {
  //     console.log("writing")
  //     await writeData({
  //       id: 1,
  //       contractID: 0,
  //       eventLocation,
  //       eventName,
  //       eventSymbol,
  //       price,
  //       supply,
  //     });
  //     console.log("done");

  //   })();
  // }, []);
  const Layout = (props: any) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={props.className}
        {...props}
      >
        {props.children}
      </motion.div>
    );
  };

  return (
    <div>
      <AnimatePresence>
        <div className={styles.mint}>
          <form className={styles.form}>
            <input
              className={styles.input}
              required
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Project Name"
              // value={name}
            />
            <input
              className={styles.input}
              required
              onChange={(e: any) => setSymbol(e.target.value)}
              placeholder="Symbol"
              // value={symbol}
            />
            <input
              className={styles.input}
              required
              onChange={(e: any) => setPrice(e.target.value)}
              type="number"
              // value={price}
              placeholder="How much do you want to sell a ticket"
            />
            <input
              className={styles.input}
              required
              onChange={(e: any) => setSupply(e.target.value)}
              type="number"
              // value={supply}
              placeholder="Amount of tickets"
            />
            <input
              className={styles.input}
              required
              onChange={(e: any) => setLocation(e.target.value)}
              // value={Location}
              placeholder="Location"
            />
            <input
              type="submit"
              placeholder=""
              onClick={(e: any) => handleClick(e)}
            />

            <p>
              We are currently in beta, we do not support custom images, you
              will be assigned one
            </p>
          </form>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Send;

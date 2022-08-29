import React, { PropsWithChildren } from "react";
import styles from "../../styles/section1.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import {
  Mail,
  UpRigtArrow,
  Google,
  Microsoft,
  Uber,
  Airbnb,
  Wired,
  Stripe,
} from "../conmponents/Svgs";

const Section1 = () => {
  const matches = useMediaQuery("(min-width: 800px)");
  return (
    <section className={styles.container} id="Home">
      <motion.h1
        className={styles.h1}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, type: "tween" }}
      >
        BLOCKCHAIN {!matches && <br />} TICKETING {!matches && <br />}PLATFORM
      </motion.h1>
      <section>
        <motion.div className={styles.img}>
          <motion.div
            initial={{ y: 200, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{ delay: 1, duration: 1, type: "tween" }}
          >
            <Image
              src="/collage.png"
              alt="not showing"
              width={400 * 2}
              height={200 * 2}
            />
          </motion.div>
        </motion.div>
        <div>
          <h2 className={styles.h2}>Create, Buy, Sell</h2>
          <p className={styles.p}>
            We help you create, handle, market and launch your next NFT based
            tickets that will cater for your next event Needs.
          </p>
          <InputMail />
        </div>
      </section>
      <div className={styles.grid}>
        <div>
          <Google />
        </div>
        <div>
          <Microsoft></Microsoft>
        </div>
        <div>
          <Uber />
        </div>
        <div>
          <Airbnb />
        </div>
        <div>
          <Wired></Wired>
        </div>
        <div>
          <Stripe></Stripe>
        </div>
      </div>
    </section>
  );
};
// @ts-ignore
export const InputMail = (props: PropsWithChildren) => {
  return (
    <div className={styles.box} {...props}>
      <Mail />{" "}
      <input className={styles.input} placeholder="Your email address" />{" "}
      <UpRigtArrow
        style={{
          justifySelf: "flex-end",
          flexGrow: "1",
          display: "flex",
          justifyContent: "flex-end",
        }}
      />
    </div>
  );
};
export default Section1;

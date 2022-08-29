import React, { PropsWithChildren } from "react";
import styles from "../../styles/section1.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
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
      <h1 className={styles.h1}>
        BLOCKCHAIN {!matches && <br />} TICKETING {!matches && <br />}PLATFORM
      </h1>
      <section>
        <div className={styles.img}>
          <Image
            src="/collage.png"
            alt="not showing"
            width={400 * 2}
            height={200 * 2}
          />
        </div>
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

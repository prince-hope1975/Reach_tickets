import React, { PropsWithChildren } from "react";
import Box from "../conmponents/Box";
import { Grid } from "@mui/material";
import styles from "../../styles/section1.module.scss";
import { H1, P } from "../conmponents/Typography/index.style";
import Image from "next/image";
import { Container } from "../conmponents/Container";
import { Oval } from "../conmponents/Svgs/Svgs.style";
import { useMediaQuery } from "@mui/material";
import { Getstarted } from "../button/getstarted";
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
import Input from "../conmponents/input";

const Section1 = () => {
  const matches = useMediaQuery("(min-width: 800px)");
  return (
    <Container id="Home">
      <h1 className={styles.h1}>
        BLOCKCHAIN {!matches && <br />} TICKETING {!matches && <br />}PLATFORM
      </h1>
      <section>
        <div
          // item
          style={{
            overflow: "hidden",
            display: "flex",
            position: "relative",
            minHeight: "8.6rem",
            minWidth: "100%",
            placeContent: "center",
            marginInline: "auto",
            width: "min-content",
            aspectRatio: "1/.5",
          }}
        >
          <Image
            src="/collage.png"
            alt="not showing"
            width={400}
            height={200}
          />
          <Oval />
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
    </Container>
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

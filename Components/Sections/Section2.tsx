import React from "react";
// import { Container } from "../conmponents/Container";
import styles from "../../styles/section2.module.scss";
import styled from "styled-components";
import { H2, H3, P } from "../conmponents/Typography/index.style";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
const Section2 = () => {
  return (
    <section className={styles.container}>
      <h2>One, Two, Testing!</h2>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, type: "tween" }}
        // container
        style={{
          gap: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3>Tickets for events can be cheap & secure</h3>
            <P>
              Gone are the days you had to pay a 20% fee to lanch your tickets,
              just because you needed a secure way to verify them. We provide a
              secure, efficient and more reliable means to hosting events all
              for the fraction of the price
            </P>
          </div>
          <VideoImg />
        </div>
        <Grid item sx={{ display: "grid", gap: "2rem" }} alignItems={"center"}>
          <Grid item>
            <H3>Reward Loyal Fans</H3>
            <P>
              Our Tickets enable a means to keep track of valuable fans that
              attend events, and reward them. We also offer a way to collect
              royalties anytime a ticket is sold on the secondary market
            </P>
          </Grid>
          <VideoImg />
        </Grid>
      </motion.div>
    </section>
  );
};

const VideoImg = () => (
  <Grid
    item
    sx={{
      overflowX: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      width: "100%",
    }}
  >
    <Image src="/robot.png" alt="unable" height={270} width={500} />
  </Grid>
);
const Container = styled.section`
  padding: 1rem 2rem;
  p {
    line-height: 1.2rem;
    font-size: clamp(12px, 1vw, 18px);
  }
  @media (min-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;
export default Section2;

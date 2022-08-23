import React from "react";
// import { Container } from "../conmponents/Container";
import styled from "styled-components";
import { H2, H3, P } from "../conmponents/Typography/index.style";
import { Grid } from "@mui/material";
import Image from "next/image";
const Section2 = () => {
  return (
    <Container>
      <H2>One, Two, Testing!</H2>
      <Grid
        container
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
          <Grid item>
            <H3>Tickets for events can be cheap & secure</H3>
            <P>
              Gone are the days you had to pay a 20% fee to lanch your tickets,
              just because you needed a secure way to verify them. We provide a
              secure, efficient and more reliable means to hosting events all
              for the fraction of the price
            </P>
          </Grid>
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
      </Grid>
    </Container>
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

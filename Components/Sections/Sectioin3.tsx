import React from "react";
import styled from "styled-components";
import { Branch, Media, Cube } from "../conmponents/Svgs";
import { useTheme } from "@mui/material/styles";
// @ts-ignore
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import { autoPlay } from "react-swipeable-views-utils";
import { H2, P } from "../conmponents/Typography/index.style";
import { Grid } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import { Getstarted } from "../button/getstarted";
import { useRouter } from "next/router";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Sectioin3 = () => {
  const matches = useMediaQuery("(min-width: 600px)");
  const router = useRouter();
  return (
    <section
      style={{
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Grid item>
        <H2 style={{ fontSize: "1.2rem" }}>Our Services</H2>
        <P style={{ fontSize: "11.6px" }}>
          Blockly, offers a host of services, such as customized faces for
          tickets, and you can even choose from our host of premade ticket
          skins, all for free. Collect royalties on your tickets and reward
          loyal fans.
        </P>
      </Grid>
      {!matches ? <SwipeableTextMobileStepper /> : <BidScreenView />}{" "}
      <Getstarted />
    </section>
  );
};
const Container = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const BoxedComponent = styled.div`
  border: 1px solid #484646;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
const Icon = styled.div`
  max-width: 2rem;
  aspect-ratio: 1;
  padding: 4px;
`;
function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {iconArr.map((step, index) => (
        <div key={step.Heading}>
          {Math.abs(activeStep - index) <= 2 ? (
            <BoxedComponent>
              <Icon>{<step.Icon />}</Icon>
              <H2 style={{ fontSize: "1.3rem" }}>{step.Heading}</H2>
              <P>{step.Desc}</P>
            </BoxedComponent>
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
}

const BidScreenView = () => {
  return (
    <Container>
      {iconArr.map((step, index) => (
        <div key={step.Heading}>
          <BoxedComponent>
            <Icon>{<step.Icon />}</Icon>
            <H2 style={{ fontSize: "1.3rem" }}>{step.Heading}</H2>
            <P>{step.Desc}</P>
          </BoxedComponent>
        </div>
      ))}
    </Container>
  );
};

const iconArr = [
  {
    Icon: Branch,
    Heading: "CONTROL ",
    Desc: "Total control of the behaviour of the tickets as well as the a host of customizations, it's all up to you",
  },
  {
    Icon: Cube,
    Heading: "2D & 3D ",
    Desc: "Create 2d and 3d interactive Tickets for your die hard fans and give fans the chance to win prizes just from your ticket",
  },
  {
    Icon: Media,
    Heading: "ROYALTIES",
    Desc: "Limit the max resale price of your tickets and collect Royalties anytime on our secondary market. Set your own rates",
  },
];
export default Sectioin3;

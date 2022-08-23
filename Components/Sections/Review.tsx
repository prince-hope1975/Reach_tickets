import React from "react";
import styled from "@emotion/styled";
import Footer from "./Footer";
const Review = () => {
  return (
    <Container id="Review">
      <H3>blockchain reduces the cost of verification</H3>

      <p>Chris swenor</p>
      <p>Ceo of Reach</p>

      <Dot />

      <Design>
        <p>Designed by JOJO Akinde </p>
        <p>Developed By Prince Charles</p>
      </Design>
      {/* <Footer /> */}
    </Container>
  );
};

const Container = styled.section`
  padding: 0 2rem;
  text-align: center;
  text-transform: uppercase;
  color: hsl(0, 0%, 50%);
  font-stretch: condensed;
  h3 {
    font-size: clamp(1.2rem, calc(5vw + 1px), 3rem);
  }
  p {
  }
`;

const Design = styled.div`
  padding: 1rem;
  margin-top: 1.8rem;
  text-align: left;
  line-height: 0.8rem;
  font-family: monospace;
  @media (min-width: 800px) {
    text-align: center;
  }
  p {
    :hover {
      text-decoration: underline;
    }
  }
`;
const H3 = styled.h3``;

const Dot = styled.div`
  --width: 0.5rem;
  position: relative;
  width: var(--width);
  aspect-ratio: 1;
  background: white;
  border-radius: 50%;
  margin: 0 auto;
  :before {
    content: " ";
    position: absolute;
    background: #000;
    width: var(--width);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid white;
    right: -0.7rem;
  }
`;

export default Review;

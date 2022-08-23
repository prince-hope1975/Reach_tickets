import styled from "styled-components";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Sectioin3";
import Pricing from "./Sections/Pricing";
import Portfolio from "./Sections/Portfolio";
import Review from "./Sections/Review"
import {useMediaQuery} from "@mui/material";

import { useGlobalContext } from "../context";
import { useEffect } from "react";
function App() {

  const {displayMessage} = useGlobalContext()
  const matched = useMediaQuery("(min-width: 1200px)");

  useEffect(()=>{
    displayMessage(true,"Hello")
  },[])
  return (
    <>
      <main
        style={{
          background: "var(--clr-bg)",
          color: "var(--font)",
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
          margin: "auto",
          padding:matched?" 0 12rem":" 0rem 1rem"
        }}
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Pricing />
        <Portfolio />
        <Review />
      </main>
    </>
  );
}

const Wrapper = styled.section`
  background: #000;
`

export default App;

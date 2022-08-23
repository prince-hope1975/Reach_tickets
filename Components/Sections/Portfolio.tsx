import React from "react";
import styled from "styled-components";
import { LargeRightArr } from "../conmponents/Svgs";
import styles from "../../styles/portfolio.module.scss";
const Portfolio = (props: any) => {
  return (
    <div className={styles.container} id="Portfolio" {...props}>
      <h2>PORTFOLIO</h2>
      <p style={{ color: "#333" }}>PREVIOUS PROJECTS</p>
      <PortfolioSection className={styles.portfoliosection}>
        {Data.map((item, index) => {
          return (
            <div key={index}>
              <a href="#">{item.Text}</a> <LargeRightArr />
            </div>
          );
        })}
      </PortfolioSection>
    </div>
  );
};

const Container = styled.section`
  padding: 1.3rem;
`;
const H2 = styled.h2`
  font-weight: 200;
`;
const PortfolioSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  div {
    display: flex;
    align-items: center;
    gap: 3rem;
    font-family: "Britanica-Black", monospace;
  }
  a {
    flex: 1;
    color: white;
    text-decoration: solid;
    font-size: 2.5rem;
    font-size: clamp(2rem, calc(10vw + 1px), 3rem);
    text-transform: uppercase;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Data = [
  {
    Text: "Fractional Real-Estate",
  },
  {
    Text: "LiveStock",
  },
  {
    Text: "Battleship",
  },
];
export default Portfolio;

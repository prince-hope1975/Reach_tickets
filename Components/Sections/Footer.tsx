import styled from "styled-components";
import React, { PropsWithChildren } from "react";
import { BlockIcon } from "../conmponents/Svgs";
import { InputMail } from "./Section1";
import styles from "../../styles/footer.module.scss";

const Footer = (props: PropsWithChildren) => {
  return (
    <footer className={styles.footer}>
      <h2>
        <BlockIcon /> Blockly
      </h2>

      <ul className={styles.ul}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
        <li>
          <a href="#Blog">Blog</a>
        </li>
        <li>
          <a href="#Review">Review</a>
        </li>
      </ul>
      <InputMail />
    </footer>
  );
};

const Contrainer = styled.section`
  /* transform: translateY(-7rem); */
  /* margin-top: 2rem; */
  --clamp: calc(9vw + 1px);
  --svg: 3rem;
  /* margin-top: -6rem; */
  margin-bottom: 2rem;
  padding: 1rem;
  h2 {
    font-size: clamp(1.2rem, var(--clamp), 3rem);
    display: flex;
    align-items: center;
    gap: 9px;

    svg {
      width: var(--svg);
      height: var(--svg);
    }
  }
  @media (min-width: 800px) {
    /* --clamp: calc(5vw +1px); */
    /* --svg: 2rem; */
    display: flex;
    gap: 1rem;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    div {
      width: 30%;
    }
  }
`;

const Links = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  row-gap: 2rem;
  padding: 0;
  li {
    :nth-of-type(2) {
      grid-column: span 2;
    }
  }
  a {
    text-decoration: none;
    color: hsl(0, 0%, 60%);
    text-transform: uppercase;
  }
  @media (min-width: 800px) {
    display: flex;
    a {
      font-size: 0.8rem;
    }
  }
`;
export default Footer;

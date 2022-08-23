import React from "react";
import styled from "styled-components";
import styles from "../../styles/pricing.module.scss"
import { RightUpArr } from "../conmponents/Svgs";

const Pricing = () => {
  return (
    <section className={styles.container} id="Pricing">
      <h2>FEATURED EVENTS</h2>
      <div className={styles.boxcon}>
        {data.map((item, index) => {
          return (
            <div className={styles.box} key={index}>
              <Head>{item.head}</Head>
              <section>
                <h3 style={{}}>{item.secondHead}</h3>
                <div>
                  {item.Price1}
                  <span>
                    BUY NOW <RightUpArr />
                  </span>
                </div>{" "}
              </section>
              <section>
                <h3 style={{}}>{item.thirdHead}</h3>
                <div>
                  {item.price2}
                  {item.price2 && (
                    <span>
                      BUY NOW <RightUpArr />
                    </span>
                  )}
                </div>
              </section>
            </div>
          );
        })}
      </div>

      {/* <Addons>
        <h3>ADD-ONS</h3>
        <div>
          <span>Live actor or actress : $300</span>
          <span>Copywriting and story direction : $500</span>
          <span>Asset creation 2D or 3D : free</span>
        </div>
        <div>
          <span>
            Eachs plan includes 2 sets of revisions Additional revisions billes
            $45 / hr
          </span>

        </div>
      </Addons> */}
    </section>
  );
};
const BoxCon = styled.div`

`;
const Container = styled.div`
--font-head:0.9rem;
--font-body:0;
  padding: 1.3rem;
  h2 {
    font-family: "Courier New", Courier, monospace;
    font-weight: 100;
    font-size: 1.3rem;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem 1rem 4rem;
  border: 1px solid #333;
  min-height: 100%;
  justify-content: center;
  gap: 1rem;
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background: red\; */
    width: 100%;
    h3 {
      text-transform: capitalize;
    }
  }
  div {
    display: flex;
    width: 90%;
    font-size: small;
    letter-spacing: 0.1ch;
    justify-content: space-between;
  }
  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-family: monospace;
    font-size: var(--font);
  }
  h3 {
    font-weight: 100;
    font-size: 0.8rem;
    text-align: center;
  }
`;
const Head = styled.h1`
font-size: medium;
font-weight: 100;
  position: relative;
  width: max-content;
  ::before {
    content: " ";
    width: 3rem;
    height: 0.08rem;
    position: absolute;
    background: #333;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  height: fit-content;
  padding-bottom: 10px;
`;
const Addons = styled.div`
display: flex;
flex-direction: column;
gap:1.3rem;
font-weight: 100;
letter-spacing: 0.8px;
div{
  display: flex;
  gap:0.5rem;
  flex-direction: column;
}
  h3{
    font-size: 1rem;
    font-weight: 300;
  }
`
const data = [
  {
    head: "BURNA BOY 02 ARENA",
    secondHead: "Regular (2D)",
    Price1: "$200",
    thirdHead: "VIP (3D)",
    price2: "$500",
  },
  {
    head: "6lack Times Square",
    secondHead: "Regular (2D)",
    Price1: "$100",
    thirdHead: "vIP (3D)",
    price2: "$300",
  },
  {
    head: "ONE DIRECTION- PRIVATE BEACH",
    secondHead: "special event (3D)",
    Price1: "$5000",
  },
];

export default Pricing;

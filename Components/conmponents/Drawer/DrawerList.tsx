import React from "react";
import styles from "../../../styles/section1.module.scss";
import { BookingContainer } from "./DrawerComponents.styles";
import Link from "next/link";
import { Xclose, BlockIcon } from "../Svgs";
import { useGlobalContext } from "../../../context";
import { useRouter } from "next/router";
const DrawerList = () => {
  const { connectWallet, isConnected, DisconnectWallet } = useGlobalContext();
  const router = useRouter();
  return (
    <div className={styles.drawerlist}>
      <div>
        <BlockIcon /> <Xclose />
      </div>
      <ul>
        {["Home", "Portfolio", "Pricing", "Review"].map((text, index) => (
          <li key={text} style={{ paddingLeft: 0 }}>
            <a href={`/#${text}`}>{text}</a>
          </li>
        ))}
        <Link href="/create">
          <BookingContainer>Get Started</BookingContainer>
        </Link>

        {!isConnected ? (
          <div
            style={{ width: "100%", marginInline: "auto" }}
            onClick={() => connectWallet()}
          >
            <BookingContainer>Connect</BookingContainer>
          </div>
        ) : (
          <div
            style={{ width: "100%", marginInline: "auto" }}
            onClick={() => {
              DisconnectWallet();
              router.reload();
            }}
          >
            <BookingContainer>Disconnect</BookingContainer>
          </div>
        )}
      </ul>
    </div>
  );
};

// const Container = styled.div`
//   background: #000;
//   color: white;
//   height: max(100vh, 400px);
//   padding: 1rem;
//   > div {
//     font-size: clamp(1.2rem, 2vw, 3rem);
//     font-family: "Roboto", sans-serif;
//     display: flex;;
//     align-items: center;
//     justify-content: space-between;
//   }
//   ul{
//     height: 70%;
//     display: flex;
//     list-style: none;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-around;
//   }
// `;
export default DrawerList;

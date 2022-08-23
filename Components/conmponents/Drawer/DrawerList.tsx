import React from "react";
import styles from "../../../styles/section1.module.scss";
import { BookingContainer } from "./DrawerComponents.styles";
import Link from "next/link";
import { Xclose } from "../Svgs";
import { useGlobalContext } from "../../../context";
import { useRouter } from "next/router";
const DrawerList = () => {
  const { connectWallet, isConnected, DisconnectWallet } = useGlobalContext();
  const router = useRouter()
  return (
    <div className={styles.drawerlist}>
      <div>
        Menu <Xclose />
      </div>
      <ul>
        {["Home", "Portfolio", "Pricing", "Review"].map((text, index) => (
          <li key={text} style={{ paddingLeft: 0 }}>
            <a href={`#${text}`}>{text}</a>
          </li>
        ))}
        <BookingContainer>
          <Link href="/create">Launch your next Tickets</Link>
        </BookingContainer>
        <BookingContainer>
          {!isConnected ? (
            <div onClick={() => connectWallet()}>Connect</div>
          ) : (
            <div
              onClick={() => {
                
                DisconnectWallet();
                router.reload()
              }}
            >
              Disconnect
            </div>
          )}
        </BookingContainer>
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

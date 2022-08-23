import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context";
import Modal from "../Components/modal";
import { useGlobalContext } from "../context";
import AppBar from "../Components/conmponents/AppBar/";
import Footer from "../Components/Sections/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const { setShowModal } = useGlobalContext();
  return (
    <AppProvider>
      <Modal key={"modal"} />
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}

export default MyApp;

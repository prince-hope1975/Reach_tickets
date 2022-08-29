import React, { useEffect, useState } from "react";
import { fetchDb, dbData, editData } from "../helpers";
import styles from "../styles/buy.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import createSectionStyle from "../styles/create.module.scss";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context";
import { Proceed } from "./create";
import Loading from "../Components/Loading";
const images = [
  "alien.png",
  "bug.png",
  "cats.png",
  "concept.png",
  "fireEyes.png",
  "monkey2.png",
];
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetchDb();
  // Pass posts data to the page via props
  return {
    props: {
      posts: JSON.stringify(res),
    },
  };
}
const Buy = ({ posts }: { posts: any }) => {
  const fetchedData = JSON.parse(posts);
  const refinedData: (dbData & { dataId: string })[] = Object.keys(fetchedData)
    ?.reverse()
    .map((item) => {
      return { ...fetchedData[item], dataId: item };
    });
  const [data, setData] = useState(refinedData ?? []);
  const { connectWallet } = useGlobalContext();
  useEffect(() => {
    connectWallet();
  }, [connectWallet]);
  return (
    <div className={styles.buy}>
      {data?.map((prop) => {
        if (!prop?.id || !prop.eventName) return;

        return (
          <Box
            key={prop.dataId}
            src={`/${images[Math.floor(Math.random() * images.length)]}`}
            btnText={`${"Buy"}`}
            func={() => null}
            {...prop}
          />
        );
      })}
    </div>
  );
};

const Box = ({
  contractID,
  eventLocation,
  eventName,
  eventSymbol,
  id,
  price,
  supply,
  sold,
  dataId,
  src,
  btnText,
}: {
  src?: string;
  dataId: string;
  btnText?: string;
  contractID: number;
  eventLocation: string;
  eventName: string;
  eventSymbol: string;
  id: number;
  price: number;
  supply: number;
  sold: number;
  func?: () => any;
}) => {
  const log = {
    id,
    contractID,
    eventName,
    eventSymbol,
    supply,
    price,
    eventLocation,
  };
  const router = useRouter();

  const { Api, displayMessage, connectWallet, isConnected, turnOffPopup } =
    useGlobalContext();
  const handleBuy = async () => {
    await connectWallet();
    displayMessage(true, <Prompt />);
  };
  const buy = async (amount: number) => {
    if (amount < 1) {
      return displayMessage(
        true,
        <Loading text="Amount cannot be less than 1" error />
      );
    }
    try {
      if (isConnected) {
        const tokens: { _hex: boolean; _isBigNumber: string }[] =
          await Api.acc.tokensAccepted();
        const newtok = tokens.filter(
          // @ts-ignore
          ({ _hex }) => _hex == id._hex
        );
        if (!(newtok.length === 1)) {
          displayMessage(true, <Loading text={`Opting into asset`} />);
          await Api.acc.tokenAccept(id);
        }
        console.log({ newtok });
        await turnOffPopup(1);
        await turnOffPopup(1);
        displayMessage(
          true,
          <Loading text={`Purchasing ${amount} Ticket(s)`} />
        );
        await Api.buy(amount, contractID);
        await turnOffPopup(1);
        await turnOffPopup(1);
        await editData({
          ...log,
          // @ts-ignore
          sold: Number(sold) + Number(amount),
          dataId: dataId,
        });
        displayMessage(
          true,
          <Loading text={`Successfully purchased ${amount} Ticket(s)`} />
        );
        await turnOffPopup(4);
        router.push("/");
      } else {
        console.log("Not connected");
      }
    } catch (error) {
      displayMessage(
        true,
        <Loading error text="An error occured trying to buy" />
      );
      console.log(error);
    }
  };

  const Prompt = () => {
    const [amount, setAmount] = useState(0);
    return (
      <Proceed
        text="Enter amount of tickets"
        onClick={async () => {
          await turnOffPopup(1);
          buy(amount);
        }}
      >
        <input type="number" onChange={(e: any) => setAmount(e.target.value)} />
      </Proceed>
    );
  };

  return (
    <motion.div
      layout
      whileHover={{
        scale: 0.95,
      }}
      className={createSectionStyle.options}
    >
      <div className={createSectionStyle.img}>
        <Image src={src ?? "/monkey.png"} height={300} width={250} />
      </div>
      <div className={styles.box}>
        <span className={styles.span}>
          Event
          <p>{eventName || "Default"}</p>
        </span>
        <span className={styles.span}>
          Price
          <p>{price || 0} Algo</p>
        </span>
        <span className={styles.span}>
          Total supply
          <p>{supply}</p>
        </span>
        <span className={styles.span}>
          Location
          <p>{eventLocation}</p>
        </span>
        <span className={styles.span}>
          Sold
          <p>
            {sold || 0}/{supply}
          </p>
        </span>
      </div>
      <Btn onClick={() => handleBuy()}>{btnText ?? "Buy"}</Btn>
    </motion.div>
  );
};
const Btn = ({ children, onClick }: { children: any; onClick: () => any }) => {
  return (
    <motion.div onClick={onClick} className={createSectionStyle.btn}>
      {children}
    </motion.div>
  );
};

export default Buy;

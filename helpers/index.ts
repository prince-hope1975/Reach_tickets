import { Variants } from "framer-motion";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { metadata } from "./types";
const firebaseConfig = {
  apiKey: "AIzaSyDSpKUpt07ssUs4ExOjHwgjG6jKy3ODbbo",
  authDomain: "nft-algo.firebaseapp.com",
  projectId: "nft-algo",
  storageBucket: "nft-algo.appspot.com",
  messagingSenderId: "645584662584",
  appId: "1:645584662584:web:887a58f64f5c023c84f6cd",
  measurementId: "G-P1R8D1DDMF",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
/**
 *
 * Helpers
 */
export const motionVariants: Variants = {
  initial: {
    opacity: 0,
    y: -300,
    transition: {
      delay: 0.6,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 300,
  },
};
export function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length;
}

export function getStringFromErr(err: unknown) {
  const str = `${err}`;
  const newStr = str.substring(
    getPosition(str, ":", 4) + 1,
    getPosition(str, ":", 5)
  );
  return newStr;
}

export const createAsyncInterval = async (func: () => null, time: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });
};

export async function writeData(props: {
  id: number;
  contractID: number;
  eventName: string;
  eventSymbol: string;
  supply: number;
  price: number;
  eventLocation: string;
}) {
  const db = getDatabase();
  set(ref(db, "db/" + props.id), {
    ...props,
  })
    .then((res: any) => {
      console.log("server response", res);
    })
    .catch(() => {
      console.log("An error occured writing to the database");
    });
}

export async function fetchDb() {
  try {
    const db = getDatabase(
      app,
      "https://nft-algo-default-rtdb.asia-southeast1.firebasedatabase.app/"
    );
    console.log("db", db);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `db/`));

    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
    return snapshot.val();
  } catch (e) {
    console.log(e);
    return { error: e };
  }
}

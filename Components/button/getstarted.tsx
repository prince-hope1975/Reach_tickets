import React from 'react'
import { motion, MotionProps } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from "../../styles/section3.module.scss";
export const Getstarted = (props:MotionProps) => {
    const router = useRouter()
  return (
    <motion.button {...props}
      onClick={() => {
        router.push("/create");
      }}
      whileHover={{ scale: 0.9 }}
      className={styles.btn}
    >
      Click here to get started
    </motion.button>
  );
}

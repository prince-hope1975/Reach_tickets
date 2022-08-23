import React, { PropsWithChildren } from "react";
import { useGlobalContext } from "../context";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/modal.module.scss";
import { MdOutlineCancel } from "react-icons/md";
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  // exit:{}
};
const modal = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: "0px",
    opacity: 1,
    transition: { delay: 0.5, type: "tween" },
  },
};
const Modal = ({ children }: PropsWithChildren) => {
  const { modalMessage, showModal, setShowModal, view, setView } = useGlobalContext();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {view =="message" && (
          <motion.div
            className={styles.backdrop}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className={styles.modal}
              variants={modal}
              //   initial="hidden"
            >
              <div onClick={() => setView("none")} className={styles.x}>
                <MdOutlineCancel />
              </div>
              {modalMessage}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {view =="launch" && (
          <motion.div
            className={styles.backdrop}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className={styles.modal}
              variants={modal}
              //   initial="hidden"
            >
              <div onClick={() => setShowModal(false)} className={styles.x}>
                <MdOutlineCancel />
              </div>
              {modalMessage}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;

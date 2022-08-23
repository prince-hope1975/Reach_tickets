import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// Styled components
import styles from "../../../styles/section1.module.scss"
import { BlockIcon, HamburgerIcon } from "../Svgs";
import TemporaryDrawer from "../Drawer";

import { motion } from "framer-motion";
// other imports
import { useGlobalContext } from "../../../context";
export default function ButtonAppBar() {
  const { setOpen, isOpen } = useGlobalContext();
  return (
    // <Box sx={{ flexGrow: 1 ,maxWidth:"100%"}}>
    <nav style={{position:"absolute", width: "100%", left:0, zIndex:11}}>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          color="inherit"
          style={{ display: "flex", gap: "4px", margin: 0, padding: 0 }}
        >
          <BlockIcon /> Blockly
        </Button>

        <div className={styles.btn}
          onClick={() => {
            setOpen(!isOpen);
            console.log("change");
          }}
          // size="large"
          // edge="start"
          // color="inherit"
          // aria-label="menu"
          // sx={{}}
        >
          <HamburgerIcon />
          <TemporaryDrawer />
        </div>
      </div>
    </nav>
    // </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import DrawerList from "./DrawerList";
import {useGlobalContext} from "../../../context";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const { isOpen, setOpen} = useGlobalContext();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    right: false,
    bottm: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  React.useEffect(() => {
    // setState({...state, top:isOpen})
    console.log(isOpen)
    // toggleDrawer(("top", isOpen)=>("top" as React.KeyboardEvent));
    console.log("Changing")
  },[isOpen]);
  const list = (anchor: Anchor) => (
    <div
      style={{ width: "auto" }}
      // role="presentation"
      onClick={()=>setOpen(false)}
      onKeyDown={()=>setOpen(false)}
    >
      <DrawerList />
    </div>
  );

  return (
    <div>
      {(["top"]).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}></Button> */}
          <Drawer
          // @ts-ignore
            anchor={anchor}
            open={isOpen}
            onClose={()=>setOpen(false)}
          >
            {/* @ts-ignore */}
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

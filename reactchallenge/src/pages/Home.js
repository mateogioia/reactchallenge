import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import { Button, Fab, Stack } from "@mui/material";
import Sidenav from "../components/Sidenav";
import { useState } from "react";
import classes from "./Home.module.css";

function Home() {
  const [hideButtons, setHideButtons] = useState(true);

  let showButtons = hideButtons ? undefined : (
    <div style={{ display: "flex" }}>
      <Button
        style={{
          backgroundColor: "#FFFFFF",
          color: "#484848",
          marginLeft: "auto",
        }}
        variant="contained"
        onClick={() => {
          console.log("attach button clicked");
        }}
      >
        Fijar
      </Button>
      <Button
        style={{ backgroundColor: "#FFFFFF", color: "#484848" }}
        variant="contained"
        onClick={() => {
          console.log("delete button clicked");
        }}
      >
        Borrar
      </Button>
    </div>
  );

  return (
    <div style={{ height: "100%" }}>
      <div className={classes.sidenav}>
        <Sidenav setHideButtons={setHideButtons} />
      </div>
      <div className={classes.home}>
        {showButtons}
        <div className={classes.fabStack}>
          <Stack spacing={0} paddingRight={3}>
            <Fab
              variant="extended"
              style={{
                background: "#ffffff",
                color: "#000000",
                height: 60,
                width: 30,
              }}
              onClick={() => {
                console.log("+ button clicked");
              }}
              aria-label="zoom-in"
            >
              <AddOutlinedIcon />
            </Fab>
            <Fab
              variant="extended"
              style={{
                background: "#ffffff",
                color: "#000000",
                height: 60,
                width: 30,
              }}
              onClick={() => {
                console.log("- button clicked");
              }}
              color="primary"
              aria-label="zoom-out"
            >
              <RemoveOutlinedIcon />
            </Fab>
          </Stack>
          <div style={{ paddingTop: 33 }}>
            <Fab
              variant="extended"
              style={{
                background: "#ffffff",
                color: "#000000",
                height: 60,
                width: 60,
              }}
              onClick={() => {
                console.log("Expand button clicked");
              }}
              color="primary"
              aria-label="expand"
            >
              <OpenWithOutlinedIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

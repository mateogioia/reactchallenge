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
    <div>
      <Button
        style={{ backgroundColor: "#FFFFFF", color: "#484848" }}
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
    <>
      <div className={classes.sidenav}>
        <Sidenav setHideButtons={setHideButtons} />
      </div>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        {showButtons}
        <Stack spacing={0}>
          <Fab
            onClick={() => {
              console.log("+ button clicked");
            }}
            color="primary"
            aria-label="zoom-in"
          >
            <AddOutlinedIcon />
          </Fab>
          <Fab
            onClick={() => {
              console.log("- button clicked");
            }}
            color="primary"
            aria-label="zoom-out"
          >
            <RemoveOutlinedIcon />
          </Fab>
        </Stack>
        <Fab
          onClick={() => {
            console.log("Expand button clicked");
          }}
          color="primary"
          aria-label="expand"
        >
          <OpenWithOutlinedIcon />
        </Fab>
      </div>
    </>
  );
}

export default Home;

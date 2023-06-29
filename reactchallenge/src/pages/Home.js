import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import { Button, Fab, Stack } from "@mui/material";
import Sidenav from "../components/Sidenav";
import { useState } from "react";

function Home() {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  let showButtons = openedDrawer ? (
    <div>
      <Button
        style={{ backgroundColor: "#FFFFFF", color: "#484848" }}
        variant="contained"
        onClick={() => {console.log("attach button clicked")}}
      >
        Fijar
      </Button>
      <Button
        style={{ backgroundColor: "#FFFFFF", color: "#484848" }}
        variant="contained"
        onClick={() => {console.log("delete button clicked")}}
      >
        Borrar
      </Button>
    </div>
  ) : undefined;

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Sidenav setOpenedDrawer={setOpenedDrawer} />
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
  );
}

export default Home;

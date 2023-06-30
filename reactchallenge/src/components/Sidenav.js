import { Button, Stack, Drawer } from "@mui/material";
import { useState } from "react";
import DrawerDetail from "./DrawerDetail";
import classes from './Sidenav.module.css';

function Sidenav(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [aperturesData, setAperturesData] = useState();
  const [equipmentData, setEquipmentData] = useState();
  const [completionData, setCompletionData] = useState();
  const [displayDetail, setDisplayDetail] = useState({
    title: "",
    data: undefined,
  });

  const handleAperturesClick = async () => {
    props.setHideButtons(false);

    setDisplayDetail({
      title: "Aberturas",
      data: aperturesData,
    });

    if (!aperturesData) {
      const response = await fetch(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas",
        {
          method: "GET",
        }
      );
      const responseJSON = await response.json();
      setAperturesData(responseJSON);
      setDisplayDetail((prevState) => {
        return { ...prevState, data: responseJSON };
      });
    }
    setIsDrawerOpen(true);
  };

  const handleEquipmentClick = async () => {
    props.setHideButtons(false);

    setDisplayDetail({
      title: "Equipamientos",
      data: equipmentData,
    });
    if (!equipmentData) {
      const response = await fetch(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento",
        {
          method: "GET",
        }
      );
      const responseJSON = await response.json();
      setEquipmentData(responseJSON);
      setDisplayDetail((prevState) => {
        return { ...prevState, data: responseJSON };
      });
    }
    setIsDrawerOpen(true);
  };

  const handleCompletionClick = async () => {
    props.setHideButtons(false);

    setDisplayDetail({
      title: "Terminaciones",
      data: completionData,
    });
    if (!completionData) {
      const response = await fetch(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones",
        {
          method: "GET",
        }
      );
      const responseJSON = await response.json();
      setCompletionData(responseJSON);
      setDisplayDetail((prevState) => {
        return { ...prevState, data: responseJSON };
      });
    }
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          props.setHideButtons(true);
        }}
        anchor="left"
      >
        <DrawerDetail title={displayDetail.title} data={displayDetail.data} />
      </Drawer>
      <Stack spacing={5}>
        <Button
          className={classes.options}
          variant="text"
          onClick={handleAperturesClick}
        >
          <img src="/Aberturas.png" alt="apertures" />
          Aberturas
        </Button>
        <Button
          className={classes.options}
          variant="text"
          onClick={handleEquipmentClick}
        >
          <img src="/Equipamiento.png" alt="equipment" />
          Equipamiento
        </Button>
        <Button
          className={classes.options}
          variant="text"
          onClick={handleCompletionClick}
        >
          <img src="/Terminaciones.png" alt="completion" />
          Terminaciones
        </Button>
      </Stack>
    </>
  );
}

export default Sidenav;

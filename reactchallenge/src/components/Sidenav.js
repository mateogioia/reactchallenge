import { Button, Stack, Drawer } from "@mui/material";
import { useState } from "react";
import DrawerDetail from "./DrawerDetail";

function Sidenav(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [clickedButtons, setClickedButtons] = useState({
    apertures: false,
    equipment: false,
    completion: false,
  });
  const [aperturesData, setAperturesData] = useState();
  const [equipmentData, setEquipmentData] = useState();
  const [completionData, setCompletionData] = useState();
  const [displayDetail, setDisplayDetail] = useState({
    title: undefined,
    data: undefined
  })

  const handleAperturesClick = async () => {
    props.setHideButtons(false);
    // setClickedButtons({
    //   apertures: !clickedButtons.apertures,
    //   equipment: false,
    //   completion: false,
    // });

    if (!aperturesData) {
      const response = await fetch(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas",
        {
          method: "GET",
        }
      );
      setAperturesData(await response.json());
    }
    setDisplayDetail({
        title: "Aberturas",
        data: aperturesData
    });
    setIsDrawerOpen(true);
  };

  const handleEquipmentClick = async () => {
    props.setHideButtons(false);
    // setClickedButtons({
    //   apertures: false,
    //   equipment: !clickedButtons.equipment,
    //   completion: false,
    // });

    if (!equipmentData) {
      const response = await fetch(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento",
        {
          method: "GET",
        }
      );
      setEquipmentData(await response.json());
    }
    setDisplayDetail({
        title: "Equipamientos",
        data: equipmentData
    });
    setIsDrawerOpen(true);
  };

  const handleCompletionClick = async () => {
    props.setHideButtons(false);
    // setClickedButtons({
    //   apertures: false,
    //   equipment: false,
    //   completion: !clickedButtons.completion,
    // });

    if (!completionData) {
      const response = await fetch(
        "https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones",
        {
          method: "GET",
        }
      );
      setCompletionData(await response.json());
    }
    setDisplayDetail({
        title: "Terminaciones",
        data: completionData
    });
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
        <DrawerDetail title={displayDetail.title} data={aperturesData} />
      </Drawer>
      <Stack spacing={5}>
        <Button variant="outlined" onClick={handleAperturesClick}>
          <img src="/Aberturas.png" alt="apertures" />
          Aberturas
        </Button>
        <Button variant="outlined" onClick={handleEquipmentClick}>
          <img src="/Equipamiento.png" alt="equipment" />
          Equipamiento
        </Button>
        <Button variant="outlined" onClick={handleCompletionClick}>
          <img src="/Terminaciones.png" alt="completion" />
          Terminaciones
        </Button>
      </Stack>
    </>
  );
}

export default Sidenav;

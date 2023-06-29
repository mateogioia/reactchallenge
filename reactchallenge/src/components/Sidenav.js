import { Button, Stack } from "@mui/material";
import { useState } from "react";

function Sidenav(props) {
    const [clickedButtons, setClickedButtons] = useState({
        apertures: false,
        equipment: false,
        completion: false
    });
    const [aperturesData, setAperturesData] = useState();
    const [equipmentData, setEquipmentData] = useState();
    const [completionData, setCompletionData] = useState();

    const handleAperturesClick = async () => {
        props.setOpenedDrawer(!clickedButtons.apertures)
        setClickedButtons({
            apertures: !clickedButtons.apertures,
            equipment: false,
            completion: false
        });

        if (!clickedButtons.apertures && !aperturesData) {
            const response = await fetch(
                "https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas",
                {
                  method: "GET",
                }
              );
              setAperturesData(await response.json());
        }
    }

    const handleEquipmentClick = async () => {
        props.setOpenedDrawer(!clickedButtons.equipment)
        setClickedButtons({
            apertures: false,
            equipment: !clickedButtons.equipment,
            completion: false
        });
        
        if (!clickedButtons.equipment && !equipmentData) {
            const response = await fetch(
                "https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento",
                {
                  method: "GET",
                }
              );
              setEquipmentData(await response.json());
        }
    }

    const handleCompletionClick = async () => {
        props.setOpenedDrawer(!clickedButtons.completion)
        setClickedButtons({
            apertures: false,
            equipment: false,
            completion: !clickedButtons.completion
        });

        if (!clickedButtons.completion && !completionData) {
            const response = await fetch(
                "https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones",
                {
                  method: "GET",
                }
              );
              setCompletionData(await response.json());
        }
    }

    return (
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
    );
}

export default Sidenav;
import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";

function Navbar() {
    const [saveMode, setSaveMode] = useState("Guardar y salir");

    const handleSaveModeChange = (event) => {
        setSaveMode(event.target.value);
      };

  return (
    <AppBar position="static" style={{backgroundColor: '#000000'}}>
      <Toolbar>
        <FaceIcon />
        <Typography
          variant="h10"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Editar medidas
        </Typography>
        <p>Nuevo proyecto</p>
        <Select
          id="save"
          name="save"
          value={saveMode}
          onChange={handleSaveModeChange}
          style={{color: '#FFFFFF', borderColor: '#FFFFFF'}}
        >
          <MenuItem value={"Guardar y salir"}>Guardar y salir</MenuItem>
          <MenuItem value={"Salir sin guardar"}>Salir sin guardar</MenuItem>
          <MenuItem value={"Guardar y continuar"}>Guardar y continuar</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

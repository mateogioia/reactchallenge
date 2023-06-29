import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import { Fab, Stack } from '@mui/material';

function Home() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Stack spacing={0}>
        <Fab onClick={() => {console.log("+ button clicked")}} color="primary" aria-label="zoom-in">
          <AddOutlinedIcon />
        </Fab>
        <Fab onClick={() => {console.log("- button clicked")}} color="primary" aria-label="zoom-out">
          <RemoveOutlinedIcon />
        </Fab>
      </Stack>
      <Fab onClick={() => {console.log("Expand button clicked")}} color="primary" aria-label="expand">
        <OpenWithOutlinedIcon />
      </Fab>
    </div>
  );
}

export default Home;

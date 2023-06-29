import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import Item from "./Item";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function DrawerDetail(props) {
  const [showCategories, setShowCategories] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState();

  const handleClick = (index, e) => {
    setShowCategories(false);
    setSelectedIndex(index);
  };

  const handleBackClick = () => {
    setShowCategories(true);
  };

  let display = showCategories ? (
    <div>
      <h3 style={{ width: 450 }}>{props.title}</h3>{" "}
      <List>
        {props.data.map((element, index) => (
          <ListItem key={element.name}>
            <ListItemButton onClick={(e) => handleClick(index, e)}>
              <ListItemText primary={element.name} />
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>{" "}
    </div>
  ) : (
    <div>
      <IconButton onClick={handleBackClick}>
        <ChevronLeftIcon />
        <Typography>{props.title}</Typography>
      </IconButton>
      <h3 style={{ width: 450 }}>{props.data[selectedIndex].name}</h3>{" "}
      <List>
        {props.data[selectedIndex].items.map((element) => (
          <ListItem key={element.name}>
            <Item
              name={element.name}
              img={element.img}
              setShowCategories={setShowCategories}
            />
          </ListItem>
        ))}
      </List>{" "}
    </div>
  );

  return <div>{display}</div>;
}

export default DrawerDetail;

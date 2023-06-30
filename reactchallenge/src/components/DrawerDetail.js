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
import classes from './DrawerDetail.module.css'

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
      <h3 className={classes.title}>{props.title}</h3>{" "}
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
      </List>
    </div>
  ) : (
    <div>
      <IconButton onClick={handleBackClick}>
        <ChevronLeftIcon />
        <Typography>{props.title}</Typography>
      </IconButton>
      <h3 className={classes.title}>{props.data[selectedIndex].name}</h3>
      <div className={classes.items}>
      {props.data[selectedIndex].items.map((element) => (
        <Item
          name={element.name}
          img={element.img}
          setShowCategories={setShowCategories}
        />
      ))}
      </div>
    </div>
  );

  return <div>{display}</div>;
}

export default DrawerDetail;

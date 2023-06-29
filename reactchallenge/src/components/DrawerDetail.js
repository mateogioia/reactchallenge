import { InboxOutlined } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function DrawerDetail(props) {
  return (
    <div>
      <h3 style={{ width: 450 }}>{props.title}</h3>
      <List>
        {props.data.map((element) => (
          <ListItem>
            <ListItemButton>
              <ListItemText primary={element.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DrawerDetail;

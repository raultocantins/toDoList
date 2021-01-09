import React, { useState } from "react";
import "./ItemList.css";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { IconButton } from "@material-ui/core";
export default function ItemList(props) {
  const [set, setData] = useState(false);
  function handleToggle() {
    var textList = document.querySelectorAll(".textList");
    if (set === false) {
      setData(true);

      textList[0].setAttribute("style", "text-decoration: line-through;");
    } else {
      setData(false);
      textList[0].setAttribute("style", "text-decoration: none;");
    }
    console.log(textList[0]);
  }

  var data = props.data;
  var date = `${new Date().getHours()}:${new Date().getMinutes()}`;
  return (
    <div className="itemlist">
      <ListItem className="textList">
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={data.text} secondary={date} />
        <IconButton>
          <Checkbox
            edge="start"
            checked={set}
            onChange={handleToggle}          
          />
        </IconButton>
      </ListItem>
    </div>
  );
}

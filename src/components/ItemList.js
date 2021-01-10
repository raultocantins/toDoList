import React, { useState } from "react";
import "./ItemList.css";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
export default function ItemList(props) {
  const [set, setData] = useState(false);

  function handleToggle(id) {
    var textList = document.getElementById(`${id}`);
    if (set === false) {
      setData(true);
      textList.setAttribute(
        "style",
        "text-decoration: line-through; background-color:rgb(235, 247, 226);"
      );
   props.remove(id)
    } else {
      setData(false);
      textList.setAttribute(
        "style",
        "text-decoration: none;  background-color:rgb(245, 241, 241);"
      );
    }




  }
  var data = props.data;
  var date = `${new Date().getHours()}:${new Date().getMinutes().toPrecision()}`;
  return (
    <div className="itemlist">
      <ListItem className="textList" id={data.id}>
        <IconButton>
          <Checkbox
            edge="start"
            checked={set}
            onChange={() => handleToggle(data.id)}
          />
        </IconButton>

        <ListItemText
          primary={data.text}
          secondary={date}
          className="textListItem"
        />
      </ListItem>
    </div>
  );
}

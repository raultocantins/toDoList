import React, { useState } from "react";
import "./ItemList.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Paper from "@material-ui/core/Paper";
export default function ItemList(props) {
  const [set, setData] = useState(false);
  function handleToggle(id) {
    var textList = document.getElementById(`${id}`);
    if (!set) {
      props.remove(id);
      textList.setAttribute(
        "style",
        "text-decoration: line-through; background-color:rgb(235, 247, 226);"
      );
      setData(true);
    } else {
      return;
    }
  }
  var data = props.data;

  var date = `${new Date().getHours()}:${new Date()
    .getMinutes()
    .toPrecision()}`;
  return (
    <div className="itemlist">
      <Paper
        elevation={2}
        variant="outlined"
        style={{ backgroundColor: "rgb(94, 97, 245,0.1)" }}
      >
        <ListItem className="textList" id={data.id}>
          <IconButton onClick={() => handleToggle(data.id)}>
            <ThumbUpIcon style={set ? { color: "green" } : { color: " rgb(233, 116, 116)" }} />
          </IconButton>

          <ListItemText
            primary={data.text}
            secondary={date}
            className="textListItem"
          />
        </ListItem>
      </Paper>
    </div>
  );
}

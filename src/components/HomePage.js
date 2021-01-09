import React from "react";
import "./HomePage.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ItemList from "./ItemList";
export default class HomePage extends React.Component {
  state = {
    tasks: [],
    text: "",
  };
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.onChange = this.onChange.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  addTask() {
    if (this.state.text) {
      var task = { id: Math.random(), text: this.state.text };
      var tasksRight = this.state.tasks.push(task);
      this.setState({
        ...this.state.tasks,
        tasksRight,
        text: "",
      });
    } else {
      alert("Insira uma Task");
    }
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  clearList() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <div className="homepage">
        <div className="appbar">
          <AppBar
            position="static"
            color="default"
            style={{ height: "auto", borderRadius: "10px 10px 0px 0px" }}
          >
            <Toolbar style={{ height: "autp" }}>
              <Typography variant="h5" color="primary" className="typography">
                <div className="menu">
                  <div className="date">
                    <strong>{new Date().toDateString()}</strong>
                  </div>
                  <div className="opcoes">
                    <h5>
                      {this.state.tasks.length}{" "}
                      {this.state.tasks.length > 1 ? "Tasks" : "Task"}{" "}
                    </h5>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={this.clearList}
                      style={{ height: "25px", fontSize: "8px" }}
                    >
                      Clear List
                    </Button>
                  </div>
                </div>
                <div className="input">
                  <Input
                    placeholder="Type your task"
                    id="outlined-size-normal"
                    value={this.state.text}
                    variant="outlined"
                    onChange={this.onChange}
                    style={{ width: "80%" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.addTask}>
                          <AddIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <div className="body">
          {this.state.tasks.map((e) => {
            return <ItemList data={e} key={e.id} />;
          })}
        </div>
      </div>
    );
  }
}

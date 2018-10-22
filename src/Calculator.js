import React, { Component } from "react";
import { Paper, Button, Grid, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export default class Calculator extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    current: "0",
    memory: null,
    operating: false
  };

  handlecurrent = newNumber => {
    if (this.state.current === "0") {
      this.setState({
        current: `${newNumber}`
      });
    } else if (this.state.operating) {
        console.log("operating")
      this.setState({
        current: `${newNumber}`,
        operating: false
      });
    } else if (this.state.operating === false) {
        console.log("not operating")
      this.setState({
        current: `${this.state.current}${newNumber}`
      });
    }
  };

  handleAddOperation = () => {
    if (this.state.memory === null) {
        this.setState({
            memory: this.state.current,
            current: `+${this.state.current}`,
            operating: true
        })
    } else {
        this.setState({
            current: `${parseFloat(this.state.memory) + parseFloat(this.state.current)}`,
            memory: `${parseFloat(this.state.memory) + parseFloat(this.state.current)}`,
            operating: true
        })
    }
    
    console.group(" after states");
    console.log("current", this.state.current);
    console.log("operating", this.state.operating);
    console.log("memory", this.state.memory);
  };

  render() {
    return (
      <Grid container>
        <Grid item sm />
        <Grid item sm>
          <Paper elevation={10} style={{ backgroundColor: "darkgray" }}>
            {"number" + this.state.current} <br />
            {"memory" + this.state.memory}
            <TextField
              value={this.state.current}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <Grid container>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(7)}>7</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(8)}>8</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(9)}>9</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>/</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(4)}>4</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(5)}>5</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(6)}>6</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>x</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(1)}>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(2)}>2</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(3)}>3</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>-</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handlecurrent(0)}>0</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>.</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>=</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleAddOperation()}>+</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

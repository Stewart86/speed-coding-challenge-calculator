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
    operationMemory: null,
    operating: false
  };

  handleClearCurrent = () => {
    this.setState({
      current: "0"
    });
  };

  handleAllClear = () => {
    this.setState({
      current: "0",
      memory: null,
      operating: false,
      operationMemory: null,
    });
  };

  handleCurrent = newNumber => {
    if (this.state.current === "0") {
      this.setState({
        current: `${newNumber}`
      });
    } else if (this.state.operating) {
      this.setState({
        current: `${newNumber}`,
        operating: false
      });
    } else if (!this.state.operating) {
      this.setState({
        current: `${this.state.current}${newNumber}`
      });
    }
  };

  handleEqual = () => {
    if (this.state.operationMemory === "+") {
      this.setState({
        current: `${parseFloat(this.state.memory) +
          parseFloat(this.state.current)}`,
      });
    } else if (this.state.operationMemory === "-") {
      this.setState({
        current: `${parseFloat(this.state.memory) -
          parseFloat(this.state.current)}`,
      });
    } else if (this.state.operationMemory === "x") {
      this.setState({
        current: `${parseFloat(this.state.memory) *
          parseFloat(this.state.current)}`,
      });
    } else if (this.state.operationMemory === "/") {
      this.setState({
        current: `${parseFloat(this.state.memory) /
          parseFloat(this.state.current)}`,
      });
    }
    this.setState({
      memory: null,
      operating: false,
      operationMemory: null,
    })
  }

  handleOperation = operator => {
    if (!this.state.operationMemory) {
      this.setState({
        operationMemory: `${operator}`,
        memory: this.state.current,
        operating: true
      });
    } else {
      if (!this.state.memory) {
        this.setState({
          memory: this.state.current,
          operating: true
        });
      }
      if (this.state.operationMemory === "+") {
        this.setState({
          memory: `${parseFloat(this.state.memory) +
            parseFloat(this.state.current)}`,
          current: `${operator}${parseFloat(this.state.memory) +
            parseFloat(this.state.current)}`,
          operating: true,
          operationMemory: `${operator}`
        });
      } else if (this.state.operationMemory === "-") {
        this.setState({
          memory: `${parseFloat(this.state.memory) -
            parseFloat(this.state.current)}`,
          current: `${operator}${parseFloat(this.state.memory) -
            parseFloat(this.state.current)}`,
          operating: true,
          operationMemory: `${operator}`
        });
      } else if (this.state.operationMemory === "x") {
        this.setState({
          memory: `${parseFloat(this.state.memory) *
            parseFloat(this.state.current)}`,
          current: `${operator}${parseFloat(this.state.memory) *
            parseFloat(this.state.current)}`,
          operating: true,
          operationMemory: `${operator}`
        });
      } else if (this.state.operationMemory === "/") {
        this.setState({
          memory: `${parseFloat(this.state.memory) /
            parseFloat(this.state.current)}`,
          current: `${operator}${parseFloat(this.state.memory) /
            parseFloat(this.state.current)}`,
          operating: true,
          operationMemory: `${operator}`
        });
      }
    }
  };

  render() {
    return (
      <Grid container>
        <Grid item sm />
        <Grid item sm>
          <Paper elevation={10} style={{ backgroundColor: "darkgray" }}>
            {"memory1 " + this.state.memory} <br />
            {"operator " + this.state.operationMemory} <br />
            <TextField
              value={this.state.current}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <Grid container>
              <Grid item sm={3}>
                <Button onClick={() => this.handleClearCurrent()}>CE</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleAllClear()}>AC</Button>
              </Grid>
              <Grid item sm={3} />
              <Grid item sm={3} />
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(7)}>7</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(8)}>8</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(9)}>9</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleOperation("/")}>/</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(4)}>4</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(5)}>5</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(6)}>6</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleOperation("x")}>x</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(1)}>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(2)}>2</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(3)}>3</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleOperation("-")}>-</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(0)}>0</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleCurrent(".")}>.</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleEqual()}>=</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleOperation("+")}>+</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

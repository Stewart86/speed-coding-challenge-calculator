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
    memory2: null,
    operationMemory: null,
    operating: false
  };

  handleClearCurrent = () => {
    this.setState({
      current: "0"
    })
  }

  handleAllClear = () => {
    this.setState({
      current: "0",
      memory: null,
      operating: false
    })
  }

  handleCurrent = newNumber => {
    if (this.state.current === "0") {
      this.setState({
        current: `${newNumber}`
      });
    } else if (this.state.operating) {
      console.log("operating");
      this.setState({
        current: `${newNumber}`,
        operating: false
      });
    } else if (this.state.operating === false) {
      console.log("not operating");
      this.setState({
        current: `${this.state.current}${newNumber}`
      });
    }
  };

  handleOperation = operator => {
    if (this.state.memory === null) {
      this.setState({
        memory: this.state.current,
        operating: true
      });
    } else {
      if (operator === "+") {
        this.setState({
          memory: `${parseFloat(this.state.current) +
            parseFloat(this.state.memory)}`,
          current: `${operator}${parseFloat(this.state.current) +
            parseFloat(this.state.memory)}`,
            operating: true

        });
      } else if (operator === "-") {
        this.setState({
          memory: `${parseFloat(this.state.current) -
            parseFloat(this.state.memory)}`,
          current: `${operator}${parseFloat(this.state.current) -
            parseFloat(this.state.memory)}`,
            operating: true

        });
      }else if (operator === "x") {
        console.log("times")
        this.setState({
          memory: `${parseFloat(this.state.current) *
            parseFloat(this.state.memory)}`,
          current: `${operator}${parseFloat(this.state.current) *
            parseFloat(this.state.memory)}`,
            operating: true

        });
      }else if (operator === "/") {
        this.setState({
          memory: `${parseFloat(this.state.current) /
            parseFloat(this.state.memory)}`,
          current: `${operator}${parseFloat(this.state.current) /
            parseFloat(this.state.memory)}`,
            operating: true

        });
      }
    }

   
    // if (this.state.memory === null) {
    //   this.setState({
    //     memory: `${this.state.current}`,
    //     current: `${operator}${this.state.current}`,
    //     operationMemory: `${operator}`,
    //     operating: true
    //   });
    // } else if (this.state.memory && !this.state.memory2) {
    //   this.setState({
    //     memory2: `${parseFloat(this.state.current) + parseFloat(this.state.memory)}`,
    //     current: `${operator}${parseFloat(this.state.current) + parseFloat(this.state.memory)}`,
    //     operationMemory: `${operator}`,
    //     operating: true
    //   });
    // } else if (this.state.memory2) {
    //   console.log("both memory")
    //   this.setState({
    //     memory: `${parseFloat(this.state.memory2)}`,

    //   })
    //   if (this.state.operationMemory === "+") {
    //     this.setState({
    //       current: `+${parseFloat(this.state.memory) + parseFloat(this.state.current)}`,
    //       memory2: `${parseFloat(this.state.memory) + parseFloat(this.state.current)}`,
    //       operationMemory: "+",
    //       operating: true
    //     });
    //   } else if (this.state.operationMemory === "-") {
    //     console.log("minus pressed")
    //   }
    // }
  };

  render() {
    return (
      <Grid container>
        <Grid item sm />
        <Grid item sm>
          <Paper elevation={10} style={{ backgroundColor: "darkgray" }}>
            {"number" + this.state.current} <br />
            {"memory1 " + this.state.memory} <br />
            {"operator " + this.state.operationMemory} <br />
            {"memory2 " + this.state.memory2}
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
              <Grid item sm={3}>
                
              </Grid>
              <Grid item sm={3}>
                
              </Grid>
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
                <Button>.</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>=</Button>
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

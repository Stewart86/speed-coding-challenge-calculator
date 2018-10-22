import React, { Component } from "react";
import { Paper, Button, Grid, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export default class Calculator extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    numbers: "0"
  };

  handleNumbers = newNumber => {
    console.log("test", newNumber);
    if (this.state.numbers === "0") {
      console.log("if 0");
      this.setState({
        numbers: `${newNumber}`
      });
    } else {
         this.setState({
      numbers: `${this.state.numbers}${newNumber}`
    });
    }
   
  };

  render() {
    return (
      <Grid container>
        <Grid item sm />
        <Grid item sm>
          <Paper elevation={10} style={{ backgroundColor: "darkgray" }}>
            <TextField
              value={this.state.numbers}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <Grid container>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(7)}>7</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(8)}>8</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(9)}>9</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>/</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(4)}>4</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(5)}>5</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(6)}>6</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>X</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(1)}>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(2)}>2</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(3)}>3</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>-</Button>
              </Grid>
              <Grid item sm={3}>
                <Button onClick={() => this.handleNumbers(0)}>0</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>.</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>=</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>+</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

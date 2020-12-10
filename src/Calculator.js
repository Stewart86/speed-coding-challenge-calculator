import React, { Component } from "react";
import {
  Paper,
  Button,
  Grid,
  TextField,
  InputAdornment
} from "@material-ui/core";
import PropTypes from "prop-types";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

export default class Calculator extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    current: "0",
    memory: null,
    operationMemory: "",
    operating: false,
    theme: false,
  };

  


  toggleTheme = (e) => {
    if(e){
      if(this.state.theme === true){
      return this.setState({ theme: false });      
      }
      if(this.state.theme === false){
       return this.setState({ theme: true });
      }
    }
  }

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
      operationMemory: ""
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
          parseFloat(this.state.current)}`
      });
    } else if (this.state.operationMemory === "-") {
      this.setState({
        current: `${parseFloat(this.state.memory) -
          parseFloat(this.state.current)}`
      });
    } else if (this.state.operationMemory === "x") {
      this.setState({
        current: `${parseFloat(this.state.memory) *
          parseFloat(this.state.current)}`
      });
    } else if (this.state.operationMemory === "/") {
      this.setState({
        current: `${parseFloat(this.state.memory) /
          parseFloat(this.state.current)}`
      });
    }
    this.setState({
      memory: null,
      operating: false,
      operationMemory: ""
    });
  };

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
      <Grid container style={{ margin: 'auto' }}>
        <Grid item sm />
        <button style={{ width: '75px', height: '50px', borderRadius: '10px', margin: 'auto', marginLeft: '40px'}} onClick={this.toggleTheme}>Toggle Theme</button>
        <Grid item sm>
          <Paper
            elevation={24}
            style={{
              backgroundColor: this.state.theme ? 'white' : '#424242',
              padding: "20px",
              width: "200px",
              margin: "auto",
              marginTop: '250px'
            }}
          >
            <Grid container>
              <Grid item>
                <TextField
                  style={{ backgroundColor: "#e0e0e0" }}
                  value={this.state.current}
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {this.state.operationMemory}
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item style={{ padding: 5 }}>
                <Button
                  variant="fab"
                  mini
                  onClick={() => this.handleClearCurrent()}
                >
                  CE
                </Button>
              </Grid>
              <Grid item style={{ padding: 5 }}>
                <Button
                  variant="fab"
                  mini
                  onClick={() => this.handleAllClear()}
                >
                  AC
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={10}>
                <Grid container direction="row">
                  <NumberButton number="7" handleCurrent={this.handleCurrent} />
                  <NumberButton number="8" handleCurrent={this.handleCurrent} />
                  <NumberButton number="9" handleCurrent={this.handleCurrent} />
                  <NumberButton number="4" handleCurrent={this.handleCurrent} />
                  <NumberButton number="5" handleCurrent={this.handleCurrent} />
                  <NumberButton number="6" handleCurrent={this.handleCurrent} />
                  <NumberButton number="1" handleCurrent={this.handleCurrent} />
                  <NumberButton number="2" handleCurrent={this.handleCurrent} />
                  <NumberButton number="3" handleCurrent={this.handleCurrent} />
                  <NumberButton number="0" handleCurrent={this.handleCurrent} />
                  <NumberButton number="." handleCurrent={this.handleCurrent} />
                  <Grid item style={{ padding: 5 }}>
                    <Button
                      variant="fab"
                      mini
                      onClick={() => this.handleEqual()}
                    >
                      =
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={2}>
                <Grid container direction="column">
                  <OperatorButton
                    operator="/"
                    handleOperation={this.handleOperation}
                  />
                  <OperatorButton
                    operator="x"
                    handleOperation={this.handleOperation}
                  />
                  <OperatorButton
                    operator="-"
                    handleOperation={this.handleOperation}
                  />
                  <OperatorButton
                    operator="+"
                    handleOperation={this.handleOperation}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

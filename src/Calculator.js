import React, { Component } from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

export default class Calculator extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Grid container>
        <Grid item sm />
        <Grid item sm>
          <Paper>This is the placeholder for the Calculator</Paper>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

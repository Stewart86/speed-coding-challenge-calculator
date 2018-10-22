import React, { Component } from "react";
import { Paper, Button, Grid, TextField } from "@material-ui/core";
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
          <Paper 
          elevation={10}
            style={{backgroundColor:"darkgray"}}>
            <TextField
              defaultValue="This is the placeholder for the Calculator"
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <Grid container>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
              <Grid item sm={3}>
                <Button>1</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

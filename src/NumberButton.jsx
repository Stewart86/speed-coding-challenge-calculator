import React from "react";
import { Grid, Button } from "@material-ui/core";

const NumberButton = props => {
  const { number, handleCurrent } = props;
  return (
    <Grid item style={{ padding: 5 }}>
      <Button variant="fab" mini onClick={() => handleCurrent(number)}>
        {number}
      </Button>
    </Grid>
  );
};

export default NumberButton;

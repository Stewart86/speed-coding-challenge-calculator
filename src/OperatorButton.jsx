import React from "react";
import { Grid, Button } from "@material-ui/core";

const OperatorButton = props => {
  const { operator, handleOperation } = props;
  return (
    <Grid item sm={12} style={{ padding: 5 }}>
      <Button variant="fab" color="secondary" mini onClick={() => handleOperation(operator)}>
        {operator}
      </Button>
    </Grid>
  );
};

export default OperatorButton;

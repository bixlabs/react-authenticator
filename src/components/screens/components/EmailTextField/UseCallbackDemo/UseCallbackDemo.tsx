import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import UnoptimizedCounter from "./components/UnoptimizedCounter/UnoptimizedCounter";
import OptimizedCounter from "./components/OptimizedCounter/OptimizedCounter";
import PaperContainer from "./components/PaperContainer/PaperContainer";

const UseCallbackDemo: React.FC = () => {
  return (
    <Grid container alignItems="center" justify="center">
      <PaperContainer title="Unoptimized Component">
        <UnoptimizedCounter />
      </PaperContainer>
      <PaperContainer title="Optimized Component with useCallback">
        <OptimizedCounter />
      </PaperContainer>
    </Grid>
  );
};

export default UseCallbackDemo;

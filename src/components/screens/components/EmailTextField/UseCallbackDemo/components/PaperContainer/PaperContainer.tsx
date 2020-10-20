import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: ".7em",
  },
  paper: {
    background: theme.palette.background.paper,
    padding: "1em",
    textAlign: "center",
    "& > *": {
      margin: ".5em",
    },
  },
}));

interface PaperContainerProps {
  children: React.ReactNode;
  title: string;
}

const PaperContainer: React.FC<PaperContainerProps> = ({ children, title }) => {
  const classes = useStyles();
  return (
    <Grid item xs={11} md={5} className={classes.gridItem}>
      <Paper className={classes.paper}>
        <div>
          <b>{title}</b>
        </div>
        {children}
      </Paper>
    </Grid>
  );
};

export default PaperContainer;

import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    background: theme.palette.background.paper,
    minWidth: "30%",
  },
  formComponent: {
    display: "flex",
    flexDirection: "column",
    "& *": {
      margin: ".5em",
    },
    "& > .top-separated": {
      margin: "1.5em 0",
      textAlign: "center",
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  },
}));

export default function WithAuthenticationLayout(
  WrappedComponent: React.FC<{ className: string }>
) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <WrappedComponent className={classes.formComponent} />
      </Paper>
    </div>
  );
}

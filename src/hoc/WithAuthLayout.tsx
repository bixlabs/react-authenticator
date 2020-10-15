import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center"
  },
  formComponent: {
    display: "flex",
    flexDirection: "column",
    '& *': {
      margin: '1em'
    }
  }
}));

export default function WithAuthenticationLayout(WrappedComponent: FC<{ className: string }>) {
  const classes = useStyles();

  return <div className={classes.root}>
    <WrappedComponent className={classes.formComponent} />
  </div>
}
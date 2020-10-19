import { IconButton, makeStyles } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import React from "react";
import actions from "context/AuthContext/actions";
import { AuthContext } from "context/AuthContext/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const { dispatch } = React.useContext(AuthContext);

  const handleLogout = () =>
    dispatch({
      type: actions.AUTH_STATE_CHANGED,
      payload: { email: null, password: null },
    });

  return (
    <div className={classes.root}>
      Logged In
      <IconButton aria-label="sign out" onClick={handleLogout}>
        <PowerSettingsNew />
      </IconButton>
    </div>
  );
};

export default Home;

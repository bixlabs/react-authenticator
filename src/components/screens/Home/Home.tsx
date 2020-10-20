import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import actions from "context/AuthContext/actions";
import { AuthContext } from "context/AuthContext/AuthContext";
import { logout } from "services/authentication";
import UseCallbackDemo from "../components/EmailTextField/UseCallbackDemo/UseCallbackDemo";

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
    logout(() =>
      dispatch({
        type: actions.LOGOUT,
      })
    );

  return (
    <div className={classes.root}>
      <UseCallbackDemo />
      <div>Logged In</div>
      <IconButton aria-label="sign out" onClick={handleLogout}>
        <PowerSettingsNew />
      </IconButton>
    </div>
  );
};

export default Home;

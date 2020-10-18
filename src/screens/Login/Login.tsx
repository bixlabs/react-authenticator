import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import actions from "../../hoc/AuthContext/actions";
import { AuthContext } from "../../hoc/AuthContext/AuthContext";

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    display: "flex",
    flex: 1,
    textDecoration: "none",
    "& > button": {
      flex: 1,
    },
  },
}));

const Login: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();
  const { dispatch } = React.useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleAuth = () =>
    dispatch({
      type: actions.AUTH_STATE_CHANGED,
      payload: { email, password },
    });

  const handleSubmit = () => {
    handleAuth();
  };

  return (
    <form className={className} noValidate autoComplete="off">
      <TextField
        error={false}
        id="loginUserEmail"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <TextField
        id="loginUserPassword"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        type="submit"
      >
        Sign in
      </Button>
      <Link to="/sign-up" className={classes.buttonLink}>
        <Button type="button" color="secondary">
          Register
        </Button>
      </Link>
      <Link to="/ " className="top-separated">
        Forgot Password?
      </Link>
    </form>
  );
};

export default Login;

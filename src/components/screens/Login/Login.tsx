import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import actions from "context/AuthContext/actions";
import { AuthContext } from "context/AuthContext/AuthContext";
import EmailTextField from "../components/EmailTextField/EmailTextField";
import { login } from "services/authentication";
import validateEmail, { EmailStatus } from "utils/validation/validateEmail";
import { User } from "authenticator/structures/User";

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

  const handleAuth = (user: User) =>
    dispatch({
      type: actions.AUTH_STATE_CHANGED,
      payload: user,
    });

  const handleSubmit = () => {
    const emailValueStatus: EmailStatus = validateEmail(email);
    if (formIsValid(emailValueStatus, password)) {
      return login({ email, password }, handleAuth, () => null);
    }
  };

  const formIsValid = (emailStatus: EmailStatus, password: string) => {
    return emailStatus.validForSubmission && password.length > 0;
  };

  return (
    <form className={className} noValidate autoComplete="off">
      <EmailTextField value={email} onChange={setemail} />
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

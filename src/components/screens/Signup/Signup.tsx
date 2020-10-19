import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import actions from "context/AuthContext/actions";
import { AuthContext } from "context/AuthContext/AuthContext";
import validateEmail, { EmailStatus } from "utils/validation/validateEmail";
import EmailTextField from "../components/EmailTextField/EmailTextField";
import { signUp } from "services/authentication";
import { User } from "authenticator/structures/User";

const useStyles = makeStyles(() => ({
  buttonLink: {
    display: "flex",
    flex: 1,
    textDecoration: "none",
    "& > button": {
      flex: 1,
    },
  },
}));

const Signup: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStyles();
  const { dispatch } = React.useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleAuth = (user: User) =>
    dispatch({
      type: actions.AUTH_STATE_CHANGED,
      payload: user,
    });

  const handleSubmit = () => {
    const emailValueStatus: EmailStatus = validateEmail(email);
    if (formIsValid(emailValueStatus, password)) {
      return signUp({ email, password }, handleAuth, () => null);
    }
  };

  const formIsValid = (emailStatus: EmailStatus, password: string) => {
    return emailStatus.validForSubmission && password.length > 0;
  };

  return (
    <form className={className} autoComplete="off">
      <EmailTextField value={email} onChange={setEmail} />
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
        Sign up
      </Button>
      <Link to="/" className={classes.buttonLink}>
        <Button type="button" color="secondary">
          Go to Login
        </Button>
      </Link>
      <Link to="/ " className="top-separated">
        Forgot Password?
      </Link>
    </form>
  );
};

export default Signup;

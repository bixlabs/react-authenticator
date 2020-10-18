import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import actions from "../../hoc/AuthContext/actions";
import { AuthContext } from "../../hoc/AuthContext/AuthContext";
import validateEmail, {
  EmailStatus,
} from "../../utils/validation/validateEmail";

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
  const [emailStatus, setEmailStatus] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
    validForSubmission: false,
  });
  const [emailValidationTimeout, setEmailValidationTimeout] = useState(
    setTimeout(() => null, 10)
  );
  const [password, setpassword] = useState("");

  const handleAuth = () =>
    dispatch({
      type: actions.AUTH_STATE_CHANGED,
      payload: { email, password },
    });

  const handleSubmit = () => {
    const emailValueStatus: EmailStatus = validateEmail(email);
    if (formIsValid(emailValueStatus, password)) {
      return handleAuth();
    }

    setEmailStatus({ ...emailStatus });
  };

  const setValidatedEmail = (value: string, debounceTimer = 0) => {
    setEmail(value);
    restartEmailValidationTimeout(() => {
      setEmailStatus((state) => ({ ...state, ...validateEmail(value) }));
    }, debounceTimer);
  };

  const restartEmailValidationTimeout = (callback: Function, timer: number) => {
    if (emailValidationTimeout) {
      clearTimeout(emailValidationTimeout);
    }
    const validationTimeout = setTimeout(() => callback(), timer);
    setEmailValidationTimeout(validationTimeout);
  };

  const formIsValid = (emailStatus: EmailStatus, password: string) => {
    return emailStatus.validForSubmission && password.length > 0;
  };

  return (
    <form className={className} autoComplete="off">
      <TextField
        error={emailStatus.validateStatus === "warning"}
        id="loginUserEmail"
        label="Email"
        type="email"
        value={email}
        helperText={emailStatus.errorMsg}
        onChange={({ target }) => setValidatedEmail(target.value, 1500)}
        onBlur={({ target }) => setValidatedEmail(target.value, 0)}
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

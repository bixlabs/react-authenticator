import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import validateEmail from "utils/validation/validateEmail";

interface EmailTextFieldProps {
  value: string;
  onChange: Function;
}

const EmailTextField: React.FC<EmailTextFieldProps> = ({ value, onChange }) => {
  const [emailStatus, setEmailStatus] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
    validForSubmission: false,
  });
  const [emailValidationTimeout, setEmailValidationTimeout] = useState(
    setTimeout(() => null, 0)
  );

  useEffect(() => {
    return () => {
      clearTimeout(emailValidationTimeout);
    };
  }, [emailValidationTimeout]);

  const setValidatedEmail = (value: string, debounceTimer = 0) => {
    onChange(value);
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

  return (
    <TextField
      error={emailStatus.validateStatus === "warning"}
      id="loginUserEmail"
      label="Email"
      type="email"
      value={value}
      helperText={emailStatus.errorMsg}
      onChange={({ target }) => setValidatedEmail(target.value, 1500)}
      onBlur={({ target }) => setValidatedEmail(target.value, 0)}
    />
  );
};

export default EmailTextField;

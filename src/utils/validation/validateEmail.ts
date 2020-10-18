export type EmailStatus = {
  value: string;
  validateStatus: string;
  errorMsg?: string;
  validForSubmission: boolean;
}

function validateEmail(value: string): EmailStatus {
  value = value.toLowerCase();
  if (!value || value === "") {
    return {
      value,
      validateStatus: "warning",
      errorMsg: "An email is required",
      validForSubmission: false,
    };
  }

  if (!value.includes("@") || value.length < 6) {
    /**let the user type more characters */
    return {
      value,
      validateStatus: "validating",
      errorMsg: "",
      validForSubmission: false,
    };
  }

  if (!value.match(regex)) {
    return {
      value,
      validateStatus: "warning",
      errorMsg: "This is not a valid email",
      validForSubmission: false,
    };
  }

  return {
    value,
    validateStatus: "success",
    errorMsg: "",
    validForSubmission: true,
  };
}

// eslint-disable-next-line no-control-regex
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default validateEmail;
import validator from "validator";

export const isEmailValidated = (email) => {
  if (!validator.isEmail(email)) {
    return JSON.parse('{"success":false, "err":"Enter valid email"}');
  } else if (validator.isEmpty(email)) {
    return JSON.parse('{"success":false, "err":"Enter valid email"}');
  }
};

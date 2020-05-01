const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegistration(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.politicalLeaning = !isEmpty(data.politicalLeaning)
    ? data.politicalLeaning
    : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Required or Is Invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please fill out this field";
  }
  if (Validator.isEmpty(data.politicalLeaning)) {
    errors.politicalLeaning = "Required Field";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be a minimum of 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required!"),
  check("email").isEmail().withMessage("Must be a valid Email Address!"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters Long!"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Must be a valid Email Address!"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters Long!"),
];

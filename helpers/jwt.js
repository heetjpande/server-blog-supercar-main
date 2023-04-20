const jwt = require("jsonwebtoken");
const secretKey = "cloudxier";

const sign = (payload) => {
  return jwt.sign(payload, secretKey);
};
const verify = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { sign, verify };

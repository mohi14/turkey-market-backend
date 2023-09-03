require("dotenv").config();
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader) {
      return res.status(401).send({
        message: "Unathorized",
      });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(
      token,
      process.env.ACCESSS_TOKEN_SECRET,
      function (err, decoded) {
        if (err) {
          return res.status(403).send({ message: "Forbidden Access" });
        }
        req.decoded = decoded;
        next();
      }
    );
  } catch (err) {
    res.status(401).send({
      message: err.message,
    });
  }
};

module.exports = {
  isAuth,
};

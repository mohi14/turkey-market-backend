const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  emailVerification,
  getUser,
} = require("../controller/userController");
const { isAuth } = require("../utils/middleware");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/verifyEmail", emailVerification);
router.get("/", isAuth, getAllUsers);
router.delete("/delete/:id", deleteUser);
router.get("/:id", getUser);

module.exports = router;

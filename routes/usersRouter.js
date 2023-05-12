// Npm Requires ↓

const express = require("express");

// Middlewares requires ↓

const { userExists, authUser } = require("../middlewares/expMiddlewares");

// Controllers requires ↓

const {
  newUser,
  login,
  modifyUser,
  modifyPassword,
  validateUser,
  deleteUser,
  recoverPassword,
  resetPassword,
} = require("../controllers/users/userControllers");

// Routes ↓

const router = express.Router();

router.post("/users/new-user", userExists, newUser);
router.get("/users/validate/:regCode", validateUser);
router.post("/users/login", login);
router.patch("/users/modify-user/:id", authUser, modifyUser);
router.delete("/users/delete/:id", authUser, deleteUser);
router.patch("/users/modify-password/:id", authUser, modifyPassword);
router.post("/users/recover-password", recoverPassword);
router.post("/users/reset-password", resetPassword);

module.exports = router;

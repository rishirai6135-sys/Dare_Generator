// user.controllers.js
import { asyncHandler } from "../utils/asyncHandler.js";

const showLoginPage = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

const loginUser = asyncHandler(async (req, res) => {
  // logic here
});

const registerUser = asyncHandler(async (req, res) => {
  // logic here
});

const showRegisterPage = (req, res) => {
  res.render("register", { pageTitle: "Create Account" });
};

const userController = {
  showLoginPage,
  loginUser,
  showRegisterPage,
  registerUser
};

export default userController;
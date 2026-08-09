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

const showSubmitPage = (req, res) => {
    res.render("submit", {pageTitle: "Success"})
}


const showRegisterPage = (req, res) => {
  res.render("register", { pageTitle: "Create Account" });
};

const resetPasswordShow = (req, res) => {
  res.render("reset", {pageTitle: "Reset Password"})
}

const userController = {
  showLoginPage,
  loginUser,
  showRegisterPage,
  registerUser,
  showSubmitPage,
  resetPasswordShow
};

export default userController;
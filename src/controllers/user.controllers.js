// user.controllers.js
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
const users  = [
  {
    id : '1',
    username: "Ram",
    password: "appleisgreat"
  },
  {
    id : '2',
    username: "Ramu",
    password: "appleisnotgreat"
  },
  {
    id : '3',
    username: "Ramy",
    password: "appleisgreatess"
  }
]

const showLoginPage = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

const loginUser = asyncHandler(async (req, res) => {
  const {username, password} = req.body

  if (!username || !password) {
    throw new ApiError(400, "Enter Credentials");
  }

  const findUser = users.find(user => (user.username === user && user.password === password))

  if (!findUser){
    throw new ApiError(400, "Incorrect Username or Password")
  }
  res.redirect("home")
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
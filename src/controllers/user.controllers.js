// user.controllers.js
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
let count = 4;
const users  = [
  {
    id : '1',
    fullname: "Ram",
    age: 15,
    username: "Ram",
    password: "appleisgreat"
  },
  {
    id : '2',
    fullname: "Ramu",
    age: 15,
    username: "Ramu",
    password: "appleisnotgreat"
  },
  {
    id : '3',
    fullname: "Ramy",
    age: 15,
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

  const findUser = users.find((user) => (user.username === username && user.password === password))

  if (!findUser){
    throw new ApiError(401, "Incorrect Username or Password")
  }
  res.redirect("/home")
});

const registerUser = asyncHandler(async (req, res) => {
  const {fullname, age, username, password} = req.body
  if (!fullname || !age || !username || !password){
    throw new ApiError(400, "Enter Credentials");
  }
  const findUser = users.find((user) => (user.username === username))
  if (findUser){
    throw new ApiError(401, "User Exists")
  }
  let newUser = {
    id: ''+count,
    fullname: fullname,
    age: age,
    username: username,
    password: password
  }
  users.push(newUser)
  res.redirect("/")
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
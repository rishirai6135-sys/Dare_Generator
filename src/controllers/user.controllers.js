import { asyncHandler } from "../utils/asyncHandler.js";

export const showLoginPage = (req, res) => {
    res.render("login", {pageTitle: "Login"});
};

export const registerUser = asyncHandler(async (req, res) => {
    
})


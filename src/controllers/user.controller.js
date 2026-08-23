import User from "../models/user.models.js"


const userControllers = {
    getLogin: (req, res) => {
        res.render("login.ejs", {pageTitle: "Login"})
    },

    getRegister: (req, res) => {
        res.render("register.ejs", {pageTitle: "Registeration"})
    },
    getReset: (req, res) => {
        res.render("reset.ejs", {pageTitle: "Reset Password"})
    },
    getHome: (req, res) => {
        res.render("home.ejs", {pageTitle: "Welcome"})
    }
}

export default userControllers
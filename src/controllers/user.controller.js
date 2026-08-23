import User from "../models/user.models.js"


const userControllers = {
    getLogin: (req, res) => {
        res.render("login.ejs", {pageTitle: "Login"})
    },

    getRegister: (req, res) => {
        res.render("register.ejs", {pageTitle: "Registeration"})
    }

}

export default userControllers
import User from "../models/user.models.js"

const getLogin =  (req, res) => {
    res.render("login.ejs")
}

const userControllers = {
    getLogin
}

export default userControllers
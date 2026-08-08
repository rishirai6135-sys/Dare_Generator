import express from "express";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", "./views");

import userRouter from "./routes/user.routes.js"

app.use("/", userRouter)

app.listen(process.env.PORT || 8080, () => {
    console.log(`App is listening on port: ${process.env.PORT}`)
})
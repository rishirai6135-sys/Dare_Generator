import express, { urlencoded } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "./views"))
app.use(urlencoded({extended: true}))

import userRouter from "./routes/user.routes.js";

app.use(userRouter);

export {app}
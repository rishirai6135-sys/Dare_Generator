import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

dotenv.config({
    path: './.env'
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
import engine from "ejs-mate"

main()
  .then(() => {
    console.log("connected db")
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    })
  })
  .catch(err => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs");

app.engine("ejs", engine)
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.urlencoded({extended: true}))



import userRoutes from "./routes/user.route.js"

app.use("/", userRoutes)
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import logger from "morgan";
// import cookieParser from "cookie-parser";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser()); -- to handle cookies

app.listen(process.env.PORT, () => {
  console.log("Server is open");
});

app.get("/", (req, res, next) => {
  res.send("Server is running");
});

app.use("/users", usersRouter);

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";
import { userRouter } from "./router/user";
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";

import router from "./src/router.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Executing in port ${port}`));
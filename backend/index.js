import express from "express";
import "express-async-errors";
import cors from "cors";

import handleError from "./src/errors.js";
import router from "./src/router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);
app.use(handleError);

const port = 3000;

app.listen(port, () => console.log(`Executing in port ${port}`));
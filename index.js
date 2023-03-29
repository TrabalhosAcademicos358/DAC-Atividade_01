import express from "express";
import "express-async-errors";
import cors from "cors";
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import handleError from "./src/errors.js";
import router from "./src/router.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1", router);
app.use(handleError);

const port = 3000;

app.listen(port, () => console.log(`Executing in port ${port}`));
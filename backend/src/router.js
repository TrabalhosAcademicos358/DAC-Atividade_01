import express from "express";

import * as controllerBook from "./controller/book.js"

const router = express.Router();

router.route("/books")
    .get(controllerBook.all)
    .post(controllerBook.create);

router.route("/books/:id")
    .get(controllerBook.getForId)
    .put(controllerBook.update)
    .patch(controllerBook.update)
    .delete(controllerBook.destroy);

router.route("/publishers")
    .get(controllerBook.all)
    .post(controllerBook.create);

router.route("/publishers/:id")
    .get(controllerBook.getForId)
    .put(controllerBook.update)
    .patch(controllerBook.update)
    .delete(controllerBook.destroy);

export default router;
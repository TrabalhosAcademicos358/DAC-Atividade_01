import express from "express";

import * as controllerPublisher from "./controller/publisher.js"
import * as controllerBook from "./controller/book.js";

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
    .get(controllerPublisher.all)
    .post(controllerPublisher.create);

router.route("/publishers/:id")
    .get(controllerPublisher.getForId)
    .put(controllerPublisher.update)
    .patch(controllerPublisher.update)
    .delete(controllerPublisher.destroy);

export default router;
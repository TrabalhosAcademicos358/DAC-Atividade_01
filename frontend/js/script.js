import * as controllerPublish from "./crud/crud_publisher.js"
import * as controllerBooks from "./crud/crud_books.js"

import {
    generatedCardPublisher,
    generateCardBook
} from "./generate.js"

const form_publish_edit = document.querySelector("#form_publisher_edit");
form_publish_edit.addEventListener("submit", async event => {
    event.preventDefault()

    try {
        const objUser = Object.fromEntries(new FormData(form_publish_edit));
        const publisher = await controllerPublish.create(objUser)
        await generatedCardPublisher(publisher);
    } catch (error) {
        alert(error.message)
    }
});

const form_book_edit = document.querySelector("#form_book_edit");
form_book_edit.addEventListener("submit", async event => {
    event.preventDefault()

    try {
        const objUser = Object.fromEntries(new FormData(form_book_edit));
        const book = await controllerBooks.create(objUser)
        await generateCardBook(book);
    } catch (error) {
        alert(error.message)
    }
});
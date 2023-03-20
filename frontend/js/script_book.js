import * as controllerBooks from "./crud/crud_books.js";

import { generateCardBook } from "./generate.js";
import { loadingBooks } from "./loadings.js";

const form_book_edit = document.querySelector("#form_book_edit");
form_book_edit.addEventListener("submit", async event => {
    event.preventDefault();

    try {
        const objUser = Object.fromEntries(new FormData(form_book_edit));
        const book = await controllerBooks.create(objUser);
        await generateCardBook(book);
    } catch (error) {
        alert(error.message);
    }
});

loadingBooks();
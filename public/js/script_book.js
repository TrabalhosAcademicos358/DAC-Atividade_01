import * as controllerBooks from "./crud/crud_books.js";

import { generateCardBook } from "./services/generate.js";
import { loadingBooks } from "./loadings.js";

const form_book_create = document.querySelector("#form_book_create");
form_book_create.addEventListener("submit", async event => {
    event.preventDefault();

    try {
        const objBook = Object.fromEntries(new FormData(form_book_create));
        const book = await controllerBooks.create(objBook);
        closeModal("#modal_book_create");
        await generateCardBook(book);
    } catch (error) {
        alert(error.message);
    }
});

const form_book_edit = document.querySelector("#form_book_edit");
form_book_edit.addEventListener("submit", async event => {
    event.preventDefault();

    try {
        const objBook = Object.fromEntries(new FormData(form_book_edit));

        const id = sessionStorage.getItem("id");
        const book = await controllerBooks.update(id, objBook);

        // await generateCardBook(book);
        location.reload()
    } catch (error) {
        alert(error.message);
    }
});

const buttonDelete = document.querySelector("#delete_book");
buttonDelete.addEventListener("click", async () => {
    try {
        const id = sessionStorage.getItem("id");
        await controllerBooks.destroy(id);
        location.reload();
    } catch (error) {
        alert(error.message);
    }
});

loadingBooks();
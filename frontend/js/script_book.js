import * as controllerBooks from "./crud/crud_books.js";

import { generateCardBook } from "./generate.js";
import { loadingBooks } from "./loadings.js";

const form_book_create = document.querySelector("#form_book_create");
form_book_create.addEventListener("submit", async event => {
    event.preventDefault();

    try {
        const objBook = Object.fromEntries(new FormData(form_book_create));
        const book = await controllerBooks.create(objBook);
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
        // const currentElement = document.querySelector("li#" + id);

        const id = sessionStorage.getItem("id");
        const book = await controllerBooks.update(id, objBook);

        // await generateCardBook(book);
        // currentElement.remove();
    } catch (error) {
        alert(error.message);
    }
});

const buttonDelete = document.querySelector("#delete_book");
buttonDelete.addEventListener("click", async () => {
    try {
        const id = sessionStorage.getItem("id");
        await controllerBooks.destroy(id);
        document.querySelector("#" + id).remove();
    } catch (error) {
        // alert(error.message);
        console.log(error);
    }
});

loadingBooks();
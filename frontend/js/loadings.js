import {
    generateCardPublisher,
    generateCardBook
} from "./generate.js"

import * as controllerPublish from "./crud/crud_publisher.js"
import * as controllerBooks from "./crud/crud_books.js"

export const loadingBooks = async () => {
    const listBooks = await controllerBooks.getAll();
    for (const book of listBooks)
        generateCardBook(book);
}

export const loadingPublisher = async () => {
    const listPublishers = await controllerPublish.getAll();
    for (const publisher of listPublishers)
        generateCardPublisher(publisher);
}
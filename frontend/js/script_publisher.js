import * as controllerPublish from "./crud/crud_publisher.js";

import { generateCardPublisher } from "./generate.js";
import { loadingPublisher } from "./loadings.js";

const form_publish_edit = document.querySelector("#form_publisher_edit");
form_publish_edit.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const objUser = Object.fromEntries(new FormData(form_publish_edit));
        const publisher = await controllerPublish.create(objUser);
        await generateCardPublisher(publisher);
    } catch (error) {
        alert(error.message);
    }
});

const buttonDelete = document.querySelector("#delete_publish");
buttonDelete.addEventListener("click", async () => {
    console.log(sessionStorage.getItem("id"))
});

loadingPublisher();
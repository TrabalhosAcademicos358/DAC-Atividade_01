import * as controllerPublish from "./crud/crud_publisher.js";

import { generateCardPublisher } from "./generate.js";
import { loadingPublisher } from "./loadings.js";

const form_publish_create = document.querySelector("#form_publisher_create");
form_publish_create.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const objPublish = Object.fromEntries(new FormData(form_publish_create));
        const publisher = await controllerPublish.create(objPublish);
        await generateCardPublisher(publisher);
    } catch (error) {
        alert(error.message);
    }
});

const form_publish_edit = document.querySelector("#form_publisher_edit");
form_publish_edit.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const objPublish = Object.fromEntries(new FormData(form_publish_edit));
        // const currentElement = document.querySelector("li#" + id);

        const id = sessionStorage.getItem("id");
        const publisher = await controllerPublish.update(id, objPublish);
        
        // await generateCardPublisher(publisher);
        // currentElement.remove();
    } catch (error) {
        alert(error.message);
    }
});

const buttonDelete = document.querySelector("#delete_publish");
buttonDelete.addEventListener("click", async () => {
    try {
        const id = sessionStorage.getItem("id");
        await controllerPublish.destroy(id);
        document.querySelector("#" + id).remove();
    } catch (error) {
        // alert(error.message);
        console.log(error);
    }
});

loadingPublisher();
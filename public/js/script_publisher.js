import * as controllerPublish from "./crud/crud_publisher.js";

import { generateCardPublisher } from "./services/generate.js";
import { loadingPublisher } from "./loadings.js";
import { closeModal } from "./services/modal.js";

const form_publish_create = document.querySelector("#form_publisher_create");
form_publish_create.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const objPublish = Object.fromEntries(new FormData(form_publish_create));
        const publisher = await controllerPublish.create(objPublish);
        closeModal("#modal_publisher_create");
        await generateCardPublisher(publisher);
    } catch (error) {
        alert(error.message);
    }
});

const form_publish_edit = document.querySelector("#form_publisher_edit");
form_publish_edit.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log('oi')

    try {
        const objPublish = Object.fromEntries(new FormData(form_publish_edit));
        
        const id = sessionStorage.getItem("id");
        const publisher = await controllerPublish.update(id, objPublish);
        
        // await generateCardPublisher(publisher);
        // currentElement.remove();
        location.reload()
    } catch (error) {
        console.log(error)
        alert(error.message);
    }
});

const buttonDelete = document.querySelector("#delete_publish");
buttonDelete.addEventListener("click", async () => {
    try {
        const id = sessionStorage.getItem("id");
        await controllerPublish.destroy(id);
        // document.querySelector("#" + id).remove();
        location.reload();
    } catch (error) {
        alert(error.message);
    }
});

loadingPublisher();
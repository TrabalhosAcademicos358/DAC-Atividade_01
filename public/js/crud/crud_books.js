import config from "../config.js";

const urlApi = config.urlApi + "/books";

export const getAll = async () => {
    const response = await fetch(urlApi);
    return await response.json();
}

export const create = async ({ 
    author_name,
    link_img,
    title
}) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({ author_name, link_img, title })
	};

    const response = await fetch(urlApi, config);
    
    if (!response.ok) throw new Error('Não foi possível criar livro.');

    return await response.json();
}

export const update = async (id, update) => {
    const config = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify(update)
	};

    const response = await fetch(`${urlApi}/${id}`, config);
    console.log(response)

    if (!response.ok) throw new Error('Não foi possível atualizar livro.');

    return await response.json();
}

export const destroy = async (id) => {
    const config = { method: "DELETE" };

    const response = await fetch(`${urlApi}/${id}`, config);
    return await response.json();
}
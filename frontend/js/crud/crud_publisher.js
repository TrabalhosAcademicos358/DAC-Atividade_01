import config from "../config.js";

const urlApi = config.urlApi + "/publishers";

export const getAll = async () => {
    const response = await fetch(urlApi);
    return await response.json();
}

export const create = async ({ 
    place_of_origin, 
    trading_name, 
    link_img 
}) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({ 
            place_of_origin, 
            trading_name, 
            link_img 
        })
	};

    const response = await fetch(urlApi, config);
    
    if (!response.ok) throw new Error('Não foi possível criar editora.');

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

    if (!response.ok) throw new Error('Não foi possível atualizar editora.');

    return await response.json();
}

export const destroy = async (id) => {
    const config = { method: "DELETE" };
    await fetch(`${urlApi}/${id}`, config);
}
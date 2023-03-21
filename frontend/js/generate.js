export const generateCardPublisher = ({ 
    place_of_origin, 
    trading_name, 
    link_img,
    id
}) => {
    const element = `
        <li class="card card-publish bg-light p-3" id="${id}">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <picture>
                    <img src="${link_img}" alt="Imagem da Editora" class="img-publish img-fluid">
                </picture>

                <header>
                    <div class="d-flex justify-content-end btn-group-sm gap-1">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_publisher_edit">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-danger">
                            <i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#modal_delete"></i>
                        </button>
                    </div>
                    <p class="h5 card-title fw-bold m-0">${limitText(trading_name, 13)}</p>
                </header>
            </div>
            <span class="text-center">
                <p class="m-1"><strong class="fw-bold">Local de Origem:</strong> ${place_of_origin}</p>
            </span>
        </li>
    `;

    addElement(element, "#list-publish");
}

export const generateCardBook = ({ 
    release_date,
    link_img,
    title,
    id
}) => {
    const element = `
        <li class="card card-book bg-light p-2" id="${id}">
            <header class="d-flex justify-content-between align-items-center">
                <p class="card-title fw-bold m-0">${limitText(title, 24)}</p>
                <div class="d-flex gap-1">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_book_edit">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-danger">
                        <i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#modal_delete"></i>
                    </button>
                </div>
            </header>
            <picture class="card-img d-flex my-3 justify-content-center">
                <img src="${link_img}" alt="Imagem do Livro" class="img-book img-fluid">
            </picture>
            <span class="d-flex justify-content-center">
                <p class="m-0"><strong class="fw-bold">Data de Lançamento:</strong> ${formateDate(release_date)}</p>
            </span>
        </li>
    `;

    addElement(element, "#list-book");
}

const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit-3) + "...";
    }
    return text;
}

const formateDate = (date) => {
    const listDateAndTime = date.split("T");
    const listDate = listDateAndTime[0].split("-");
    
    const dateFormated = listDate[2] + "/" + listDate[1] + "/" + listDate[0];
    return dateFormated;
}

const addElement = (element, idList) => {
    const parser = new DOMParser()
    const elementHTML = parser.parseFromString(element, "text/html");

    const tagLi = elementHTML.querySelector("li")
    tagLi.addEventListener("click", () => {
        sessionStorage.setItem("id", tagLi.id)
    });

    const list = document.querySelector(idList);
    list.appendChild(tagLi);
}
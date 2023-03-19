export const generateCardPublisher = ({ 
    place_of_origin, 
    trading_name, 
    link_img 
}) => {
    const element = `
        <li class="card card-publish bg-light p-3">
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
    `

    const list = document.querySelector("#list-publish");
    list.innerHTML += element;
    return element;
}

export const generateCardBook = ({ 
    release_date,
    link_img,
    title
}) => {
    const element = `
        <li class="card card-book bg-light p-2">
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
    `

    const list = document.querySelector("#list-books");
    list.innerHTML += element;
    return element;
}

const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit-3) + "...";
    }
    return text;
}

const formateDate = (date) => {
    const listDate = date.split("-");
    const dateFormated = listDate[1] + "/" + listDate[0] + "/" + listDate[2];
    return dateFormated;
}
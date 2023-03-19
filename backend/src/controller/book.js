import db from "../db.js";

export const all = async (req, res) => {
    const books = await db.book.findMany();
    res.json(books);
}

export const getForId = async (req, res) => {
    const { id } = req.params;

    const book = await db.book.findUniqueOrThrow({
        where: { id }
    });

    res.json(book);
}

export const create = async (req, res) => {
    const { release_date, title, link_img } = req.body;

    const book = await db.book.create({                                                                                                                                                                                                                                                                                                                                                                                                        
        data: { release_date, title, link_img }
    });

    res.status(201).json(book);
}

export const update = async (req, res) => {
    const { id } = req.params;
    const { release_date, title, link_img } = req.body;

    await db.book.findUniqueOrThrow({
        where: { id }
    });

    const book = await bd.book.update({
        where: { id },
        data: { release_date, title, link_img }
    });

    res.status(201).json(book);
}

export const destroy = async (req, res) => {
    const { id } = req.params;

    const filter = { where: { id } };

    await db.books.findUniqueOrThrow(filter);
    const book = await db.book.delete(filter);

    res.status(204).json(book);
}
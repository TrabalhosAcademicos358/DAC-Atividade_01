import db from "../db.js";

export const all = async (req, res) => {
    const books = await db.books.findMany();
    res.json(books);
}

export const getForId = async (req, res) => {
    const { id } = req.params;

    const book = await db.books.findUniqueOrThrow({
        where: { id }
    });

    res.json(book);
}

export const create = async (req, res) => {
    const { release_date, title } = req.body;

    const book = await db.books.create({                                                                                                                                                                                                                                                                                                                                                                                                        
        data: { release_date, title }
    });

    res.status(201).json(book);
}

export const update = async (req, res) => {
    const { id } = req.params;
    const { release_date, title } = req.body;

    await db.books.findUniqueOrThrow({
        where: { id }
    });

    const book = await bd.books.update({
        where: { id },
        data: { release_date, title }
    });

    res.status(201).json(book);
}

export const destroy = async (req, res) => {
    const { id } = req.params;

    const filter = { where: { id } };

    await db.books.findUniqueOrThrow(filter);
    const book = await db.books.delete(filter);

    res.status(204).json(book);
}
import db from "../db.js";

export const all = async (req, res) => {
    const publishers = await db.publisher.findMany();
    res.json(publishers);
}

export const getForId = async (req, res) => {
    const { id } = req.params;

    const publisher = await db.publisher.findUniqueOrThrow({
        where: { id }
    });

    res.json(publisher);
}

export const create = async (req, res) => {
    const { place_of_origin, trading_name } = req.body;

    const publisher = await db.publisher.create({                                                                                                                                                                                                                                                                                                                                                                                                        
        data: { place_of_origin, trading_name }
    });

    res.status(201).json(publisher);
}

export const update = async (req, res) => {
    const { id } = req.params;
    const { place_of_origin, trading_name } = req.body;

    await db.publisher.findUniqueOrThrow({
        where: { id }
    });

    const publisher = await bd.publisher.update({
        where: { id },
        data: { place_of_origin, trading_name }
    });

    res.status(201).json(publisher);
}

export const destroy = async (req, res) => {
    const { id } = req.params;

    const filter = { where: { id } };

    await db.publisher.findUniqueOrThrow(filter);
    const publisher = await db.publisher.delete(filter);

    res.status(204).json(publisher);
}
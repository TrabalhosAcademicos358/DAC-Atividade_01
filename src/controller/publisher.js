import db from "../db.js";

export const all = async (req, res) => {
    const publishers = await db.publisher.findMany();
    res.json(publishers);
}

export const getForId = async (req, res) => {
    const { id } = req.params;

    const publisher = await db.publisher.findUniqueOrThrow({
        where: { id: Number(id) }
    });

    res.json(publisher);
}

export const create = async (req, res) => {
    const { place_of_origin, trading_name, link_img } = req.body;

    const publisher = await db.publisher.create({                                                                                                                                                                                                                                                                                                                                                                                                        
        data: { place_of_origin, trading_name, link_img }
    });

    res.status(201).json(publisher);
}

export const update = async (req, res) => {
    const { id } = req.params;
    const { place_of_origin, trading_name, link_img } = req.body;

    await db.publisher.findUniqueOrThrow({
        where: { id: Number(id) }
    });

    const publisher = await db.publisher.update({
        where: { id: Number(id) },
        data: { place_of_origin, trading_name, link_img }
    });

    res.status(201).json(publisher);
}

export const destroy = async (req, res) => {
    const { id } = req.params;

    const filter = { where: { id: Number(id) } };

    await db.publisher.findUniqueOrThrow(filter);
    const publisher = await db.publisher.delete(filter);

    res.status(204).json(publisher);
}
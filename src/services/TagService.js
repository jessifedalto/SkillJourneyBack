import Tag from "../model/Tag.js"

export default class TagService {
    static async create(tagData) {
        return await Tag.create(tagData);
    }

    static async update(id, tagData) {
        const tag = await Tag.update( 
            tagData,
            { where: { id: id }}
        );

        if (!tag) throw Error('Tag não existe.');

        if (tag == 0) throw Error('Nenhuma tag atualizada.');

        return await Tag.findByPk(id);
    }

    static async delete(id) {
        const tag = await Tag.findByPk(id);

        if (!tag) throw Error('Tag não existe.');

        return await tag.destroy();
    }

    static async getAll() {
        const tags = await Tag.findAll();

        if (!tags) throw Error('Tag não existe.');

        return tags;
    }
}
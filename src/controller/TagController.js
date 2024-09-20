import TagService from "../services/TagService.js";

export default class TagController {

    static async create(req, res) {
        const { name } = req.body;

        if (!name) return res.status(400).send({ message: 'O nome da tag é obrigatório' });

        const tag = {
            name: name
        };

        try {
            const newTag = await TagService.create(tag);
            return res.status(201).send({ id: newTag.id, message: 'Tag cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar Tag.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id da tag é obrigatório." });

        try {
            await TagService.delete(id);
            return res.status(200).send({ message: "Tag deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Tag.", message: error.message });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!name) return res.status(400).send({ message: 'O nome deve ser alterado' })


        const tag = {
            name: name
        };

        try {
            const newTag = await TagService.update(id, tag);
            return res.status(200).send({ Tag: newTag, message: "Tag atualizada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar Tag.", message: error.message });
        }

    }

    static async getAll(req, res) {
        try {
            const tags = await TagService.getAll();
            return res.status(200).send({ data: tags, message: "Tags encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar tags.", message: error.message });
        }
    }
}
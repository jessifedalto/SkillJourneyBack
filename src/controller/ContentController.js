import ContentService from "../services/ContentService.js";

export default class ContentController {
    static async create(req, res) {
        await ContentService.getAllContent();
        return res.status(200).send({  message: "" });
    }

    static async update(req, res) {
        return res.status(200).send({  message: "" });
    }

    static async delete(req, res) {
        return res.status(200).send({  message: "" });
    }

    static async getById(req, res) {
        return res.status(200).send({  message: "" });
    }

    static async getByLesson(req, res) {
        const { id } = req.params;
        try {
            const contents = await ContentService.getContentByLesson(id);
            
            return res.status(200).send({ data: contents, message: "contents encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar contents.", message: error.message });
        }
    }


}
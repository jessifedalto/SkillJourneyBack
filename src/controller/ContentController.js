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

    static async getByTrainingContent(req, res) {
        return res.status(200).send({  message: "" });
    }

    static async getById(req, res) {
        return res.status(200).send({  message: "" });
    }

}
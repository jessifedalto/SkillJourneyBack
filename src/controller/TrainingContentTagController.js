import TrainingContentTagService from "../services/TrainingContentTagService.js";

export default class TrainingContentTagController {

    static async create(req, res) {
        const { trainingContentId, tagId } = req.params;

        if (!trainingContentId || !tagId) return res.status(400).send({ message: 'Os id são obrigatórios' })

        const trainingSkill = {
            trainingContentId: trainingContentId,
            tagId: tagId
        };

        try {
            const newTrainingContentTag = await TrainingContentTagService.create(trainingSkill);
            return res.status(201).send({ id: newTrainingContentTag.id, message: 'Training content tag cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar training content tag.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id é obrigatório." });

        try {
            await TrainingContentTagService.delete(id);
            return res.status(200).send({ message: "Training content tag deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Training contetn tag.", message: error.message });
        }
    }

    static async getByTrainingContent(req, res) {
        const { id } = req.params;

        try {
            const trainingContent = await TrainingContentTagService.getByTrainingContent(id);
            
            return res.status(200).send({ TrainingContent: trainingContent, message: "Training contents encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training contents.", message: error.message });
        }
    }

    static async getByTag(req, res) {
        const { id } = req.params;

        try {
            const trainingContent = await TrainingContentTagService.getByTag(id);
            return res.status(200).send({ TrainingContent: trainingContent, message: "Training contents encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training contents.", message: error.message });
        }
    }
}
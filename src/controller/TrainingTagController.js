import TrainingTagService from "../services/TrainingTagService.js";

export default class TrainingTagController {

    static async create(req, res) {
        const { trainingId, tagId } = req.params;

        if (!trainingId || !tagId) return res.status(400).send({ message: 'Os id são obrigatórios' })

        const trainingSkill = {
            trainingId: trainingId,
            tagId: tagId
        };

        try {
            const newTrainingTag = await TrainingTagService.create(trainingSkill);
            return res.status(201).send({ id: newTrainingTag.id, message: 'Training  tag cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar training  tag.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id é obrigatório." });

        try {
            await TrainingTagService.delete(id);
            return res.status(200).send({ message: "Training  tag deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Training contetn tag.", message: error.message });
        }
    }

    static async getByTraining(req, res) {
        const { id } = req.params;

        try {
            const training = await TrainingTagService.getByTraining(id);
            
            return res.status(200).send({ data: training, message: "Training s encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training s.", message: error.message });
        }
    }

    static async getByTag(req, res) {
        const { id } = req.params;

        try {
            const training = await TrainingTagService.getByTag(id);
            return res.status(200).send({ data: training, message: "Training s encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training s.", message: error.message });
        }
    }
}
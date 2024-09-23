import TrainingContentService from "../services/TrainingContentService.js";

export default class TrainingContentController {
    static async create(req, res) {
        const { trainingId } = req.params;
        const { name } = req.body;

        if (!trainingId) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!name) return res.status(400).send({ message: 'O nome da aula é obrigatório' })

        const trainingContent = {
            trainingId: trainingId,
            name: name
        };

        try {
            const newTrainingContent = await TrainingContentService.create(trainingContent);
            return res.status(201).send({ id: newTrainingContent.id, message: 'Training content cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar training content.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id é obrigatório." });

        try {
            await TrainingContentService.delete(id);
            return res.status(200).send({ message: "Training content deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Training Content.", message: error.message });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!name) return res.status(400).send({ message: 'O nome deve ser alterado' })

        const trainingContent = {
            name: name
        };

        try {
            const newTrainingContent = await TrainingContentService.update(id, trainingContent);
            return res.status(200).send({ TrainingContent: newTrainingContent, message: "Training Content atualizada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar Training Content.", message: error.message });
        }
    }

    static async getByTraining(req, res) {
        const { id } = req.params;

        try {
            const trainingContent = await TrainingContentService.getByTraining(id);
            return res.status(200).send({ TrainingContent: trainingContent, message: "training content encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training contents.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        try {
            const trainingContent = await TrainingContentService.getById(id);
            return res.status(200).send({ TrainingContent: trainingContent, message: "training content encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training content.", message: error.message });
        }
    }
}
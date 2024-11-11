import TrainingSkillService from "../services/TrainingSkillService.js";

export default class TrainingSkillController {
    static async create(req, res) {
        const { skillId, trainingId } = req.params;
        const { impactLevel } = req.body;


        if (!skillId || !trainingId) return res.status(400).send({ message: 'Os id são obrigatórios' })

        if (!impactLevel) return res.status(400).send({ message: 'O impacto da training skill é obrigatório' })

        const trainingSkill = {
            skillId: skillId,
            trainingId: trainingId,
            impact_level: impactLevel
        };

        try {
            const newTrainingSkill = await TrainingSkillService.createTrainingSkill(trainingSkill);
            return res.status(201).send({ id: newTrainingSkill.id, message: 'Training skill cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar training skill.", message: error.message });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { impactLevel } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!impactLevel) return res.status(400).send({ message: 'Algum parametro deve ser alterado' })


        const trainingSkill = {
            impact_level: impactLevel
        };

        try {
            const newTrainingSkill = await TrainingSkillService.updateTrainingSkill(id, trainingSkill);
            return res.status(200).send({ data: newTrainingSkill, message: "Training skill atualizada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar Training Skill.", message: error.message });
        }

    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id da training skill é obrigatório." });

        try {
            await TrainingSkillService.deleteTrainingSkill(id);
            return res.status(200).send({ message: "Training Skill deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Training Skill.", message: error.message });
        }
    }

    static async getBySkill(req, res) {
        const { id } = req.params;

        try {
            const trainingSkill = await TrainingSkillService.getBySkill(id);
            return res.status(200).send({ data: trainingSkill, message: "Training skills encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training skills.", message: error.message });
        }
    }

    static async getByTraining(req, res) {
        const { id } = req.params;

        try {
            const trainingSkill = await TrainingSkillService.getByTraining(id);
            return res.status(200).send({ data: trainingSkill, message: "Training skills encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar training skills.", message: error.message });
        }
    }
}
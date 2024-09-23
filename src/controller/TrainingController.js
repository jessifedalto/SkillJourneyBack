import TrainingService from "../services/TrainingService.js";

export default class TrainingController
{
    static async create(req, res)
    {
        const { name, description, duration, due_date } = req.body;

        if (!name) return res.status(400).send({ message: "O nome do treinamento é obrigatório." });
        if (!duration) return res.status(400).send({ message: "A duração do treinamento é obrigatório." });

        const training = {
            name: name,
            description: description,
            duration: duration,
            due_date: due_date,
            authorId: req.employeeId
        };
        
        try {
            await TrainingService.exists(training.name);
            const new_training = await TrainingService.createTraining(training);
            return res.status(201).send({ id: new_training.id,  message: "Treinamento criado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar treinamento.", message: error.message });
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params;
        if (!id) return res.status(400).send({ message: "O id do treinamento é obrigatório." });

        try {
            await TrainingService.deleteTraining(id);
            return res.status(200).send({ message: "Treinamento deletado com sucesso." });
        } catch (error) {
            if (error.name === 'SequelizeForeignKeyConstraintError')
                return res.status(400).json({ message: 'Não é possível excluir este treinamento pois ele já foi completado por alguém.' });
            return res.status(500).send({ error: "Erro ao deletar treinamento.", message: error.message });
        }    
    }

    static async update(req, res)
    {
        const { id } = req.params;
        const { name, description, duration, due_date } = req.body;
        
        if (!id) return res.status(400).send({ message: "O id do treinamento é obrigatório." });
        
        if (!name && !description && !due_date && !duration) 
            return res.status(400).send({ message: "Nenhum campo informado." });

        const training = {
            name: name,
            description: description,
            duration: duration,
            due_date: due_date
        };

        try {
            const updated_training = await TrainingService.updateTraining(id, training);
            return res.status(200).send({ training: updated_training,  message: "Treinamento atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar o treinamento.", message: error.message });
        }
    }

    static async getById(req, res)
    {
        const { id } = req.params;
        if (!id) return res.status(400).send({ message: "O id do treinamento é obrigatório." });

        try {
            const training = await TrainingService.getTrainingById(id);
            return res.status(200).send({ data: training ,message: "Treinamento encontrado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao encontrar treinamento.", message: error.message });
        }    
    }

    static async getByName(req, res)
    {
        const { name } = req.params;

        if (!name) return res.status(400).send({message: 'O nome do treinamento é obrigatório.'});

        try {
            const trainings = await TrainingService.getTrainingByName(name);
            return res.status(200).send({ data: trainings, message: "Treinamentos encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar treinamentos.", message: error.message });
        }
    }
    static async getAll(req, res) {
        try {
            const trainings = await TrainingService.getAllTraining();
            return res.status(200).send({ data: trainings, message: "Treinamentos encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar treinamentos.", message: error.message });
        }
    }
}
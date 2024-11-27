import EmployeeTrainingService from "../services/EmployeeTrainingService.js";

export default class EmployeeTrainingController {
    static async create(req, res) {
        const { employeeId, trainingId, finishDate, skill_updated } = req.body;

        if (!employeeId || !trainingId) return res.status(400).send({ message: 'Os id são obrigatórios' })

        if (!skill_updated) return res.status(400).send({ message: 'O estado da skill é obrigatório' })

        const employeeTraining = {
            employeeId: employeeId,
            trainingId: trainingId,
            finishDate: finishDate,
            skill_updated: skill_updated
        };

        try {
            const newEmployeeTrainig = await EmployeeTrainingService.createEmployeeTraining(employeeTraining);
            return res.status(201).send({ id: newEmployeeTrainig.id, message: 'Employee training cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar Employee training.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id do employee é obrigatório." });

        try {
            await EmployeeTrainingService.deleteEmployeeTraining(id);
            return res.status(200).send({ message: "Employee Training deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Employee Training.", message: error.message });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { finishDate, skill_updated } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!finishDate && !skill_updated) return res.status(400).send({ message: 'Algum parametro deve ser alterado' })

        const employeeTraining = {
            finish_date: finishDate,
            skill_updated: skill_updated
        };

        try {
            const newEmployeeTraining = await EmployeeTrainingService.updateEmployeeTraining(id, employeeTraining);
            return res.status(200).send({ data: newEmployeeTraining, message: "Employee Training atualizada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar Employee Training.", message: error.message });
        }

    }

    static async getByEmployee(req, res) {
        const { id } = req.params;

        try {
            const employeeTraining = await EmployeeTrainingService.getEmployeeTrainingByEmployee(id);
            return res.status(200).send({ data: employeeTraining, message: "Employee trainings encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employee training.", message: error.message });
        }
    }

    static async getByTraining(req, res) {
        const { id } = req.params;

        try {
            const employeeTraining = await EmployeeTrainingService.getEmployeeTrainingByTraining(id);
            return res.status(200).send({ data: employeeTraining, message: "Employee trainings encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employee training.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        try {
            const employeeTraining = await EmployeeTrainingService.getEmployeeTrainingById(id);
            return res.status(200).send({ data: employeeTraining, message: "Employee trainings encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employee training.", message: error.message });
        }
    }
}
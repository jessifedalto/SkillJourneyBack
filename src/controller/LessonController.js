import LessonService from "../services/LessonService.js";

export default class LessonController {
    static async create(req, res) {
        const { trainingId } = req.params;
        const { name } = req.body;

        if (!trainingId) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!name) return res.status(400).send({ message: 'O nome da aula é obrigatório' })

        const Lesson = {
            trainingId: trainingId,
            name: name
        };

        try {
            const newLesson = await LessonService.create(Lesson);
            return res.status(201).send({ id: newLesson.id, message: 'Lesson cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar Lesson.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id é obrigatório." });

        try {
            await LessonService.delete(id);
            return res.status(200).send({ message: "Lesson deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Lesson.", message: error.message });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!name) return res.status(400).send({ message: 'O nome deve ser alterado' })

        const Lesson = {
            name: name
        };

        try {
            const newLesson = await LessonService.update(id, Lesson);
            return res.status(200).send({ data: newLesson, message: "Lesson atualizada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar Lesson.", message: error.message });
        }
    }

    static async getByTraining(req, res) {
        const { id } = req.params;

        try {
            const lessons = await LessonService.getByTraining(id);
            return res.status(200).send({ data: lessons, message: "Lesson encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar Lessons.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        try {
            const lessons = await LessonService.getById(id);
            return res.status(200).send({ data: lessons, message: "Lesson encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar Lesson.", message: error.message });
        }
    }
}
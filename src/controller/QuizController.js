import QuizService from "../services/QuizService.js";

export default class QuizController
{
    static async create(req, res)
    {
        const { trainingContentId } = req.params;
        const { name } = req.body;

        if (!name) return res.status(400).send({ message: "O nome do quiz é obrigatório." });
        if (!trainingContentId) return res.status(400).send({ message: "O id do training content é obrigatório." });

        const quiz = {
            name: name,
            trainingContentId: trainingContentId
        };

        try {
            await QuizService.exists(quiz.name, trainingContentId);
            const new_quiz = await QuizService.createQuiz(quiz);
            return res.status(201).send({ id: new_quiz.id,  message: "Quiz criado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar quiz.", message: error.message });
        }
    }

    static async update(req, res)
    {
        const { id } = req.params;
        const { name } = req.body;

        if (!id) return res.status(400).send({ message: "O id do quiz é obrigatório." });

        if (!name) return res.status(400).send({ message: "O nome do quiz é obrigatório." });

        const quiz = {
            name: name
        };

        try {
            const updated_quiz = await QuizService.updateQuiz(id, quiz);
            return res.status(200).send({ data: updated_quiz,  message: "Quiz atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar o quiz.", message: error.message });
        }

    }

    static async delete(req, res)
    {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id do quiz é obrigatório." });

        try {
            await QuizService.deleteQuiz(id);
            return res.status(200).send({ message: "Quiz deletado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar quiz.", message: error.message });
        }
    }


    static async getByTrainingContent(req, res)
    {
        const { trainingContentId } = req.params;

        if (!trainingContentId) return res.status(400).send({ message: "O id do training content é obrigatório." });

        try {
            const quiz = await QuizService.getByQuizTrainingContent(trainingContentId);
            return res.status(200).send({ data: quiz, message: "Quiz encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao encontrar quiz.", message: error.message });
        }
    }
}
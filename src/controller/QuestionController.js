import QuestionService from "../services/QuestionService.js";

export default class QuestionController {
    static async create(req, res) {
        const { quizId } = req.params;
        const { statement, difficultyLevel } = req.body;

        if (!statement || !difficultyLevel) return res.status(400).send({ message: "O enunciado/dificuldade é(são) obrigatório(s)." });
        if (!quizId) return res.status(400).send({ message: "O id do quiz é obrigatório." });

        const question = {
            quizId: quizId,
            statement: statement,
            difficulty_level: difficultyLevel
        };

        try {
            const newQuestion = await QuestionService.create(question);
            return res.status(201).send({ id: newQuestion.id, message: "Questão criada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar questão.", message: error.message });
        }

    }

    static async update(req, res) {
        const { id } = req.params;
        const { statement, difficultyLevel } = req.body;

        if (!id) return res.status(400).send({ message: "O id do quiz é obrigatório." });

        if (!statement && !difficultyLevel) return res.status(400).send({ message: "Algum parametro da questão deve mudar." });

        const question = {
            statement: statement,
            difficulty_level: difficultyLevel
        };

        try {
            const updatedQuestion = await QuestionService.update(id, question);
            return res.status(200).send({ department: updatedQuestion, message: "Questão atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar a questão.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id da questão é obrigatório." });

        try {
            await QuestionService.delete(id);
            return res.status(200).send({ message: "Questão deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar questão.", message: error.message });
        }
    }

    static async getByQuiz(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id do quiz é obrigatório." });

        try {
            const questions = await QuestionService.getByQuiz(id);
            return res.status(200).send({ data: questions, message: "Questões encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao encontrar questões.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({message: 'O id da questão é obrigatório'});

        try {
            const question = await QuestionService.getQuestion(id);
            return res.status(200).send({ Questão: question, message: "Questão encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar questão.", message: error.message });
        }
    }
}
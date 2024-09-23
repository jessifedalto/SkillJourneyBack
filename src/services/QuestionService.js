import Question from "../model/Question.js";

export default class QuestionService {
    static async create(questionData) {
        return await Question.create(questionData);
    }

    static async update(id, questionData) {
        const question = await Question.update(
            questionData,
            { where: { id: id } }
        )

        if (!question) throw Error('Questão não existe.');

        if (question == 0) throw Error('Nenhum questão atualizado.');

        return await Question.findByPk(id);
    }

    static async delete(id) {
        const question = await Question.findOne({ where: { id: id } });

        if (!question) throw Error('Questão não existe.');

        return await question.destroy();
    }

    static async getByQuiz(id) {
        return await Question.findAll({ where: { quizId: id } });
    }

    static async getQuestion(id){
        return await Question.findByPk(id);
    }
}
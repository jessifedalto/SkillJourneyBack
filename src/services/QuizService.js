import Quiz from '../model/Quiz.js'

export default class QuizService
{
    static async createQuiz(quiz_data){
        return await Quiz.create(quiz_data);
    }

    static async exists(name, id){
        const quiz = await Quiz.findOne({ where: { name: name, trainingContentId: id }});
        
        if(quiz) throw Error('Quiz já existe.');

        return quiz;
    }

    static async deleteQuiz( id ){
        const quiz = await Quiz.findOne({ where: { id: id }});

        if (!quiz) throw Error('Quiz não existe.');

        return await quiz.destroy();
    }

    static async updateQuiz( id, quiz_data ){
        const quiz = await Quiz.update( 
            quiz_data,
            { where: { id: id }}
        );

        if (!quiz) throw Error('Quiz não existe.');

        if (quiz == 0) throw Error('Nenhum quiz atualizado.');

        return await Quiz.findByPk(id);
    }

    static async getByQuizTrainingContent(id){
        return await Quiz.findAll({ where: { trainingContentId: id }});
    }
}
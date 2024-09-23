import Training from '../model/Training.js'
import { Op } from 'sequelize';

export default class TrainingService
{
    static async createTraining(training_data){
        return await Training.create(training_data);
    }

    static async exists(name){
        const training = await Training.findOne({ where: { name: name }});
        
        if(training) throw Error('Treinamento já existe.');

        return training;
    }

    static async deleteTraining( id ){
        const training = await Training.findByPk(id);

        if (!training) throw Error('Treinamento não existe.');

        return await training.destroy();
    }

    static async updateTraining( id, training_data ){
        const training = await Training.update( 
            training_data,
            { where: { id: id }}
        );

        if (!training) throw Error('Treinamento não existe.');

        if (training == 0) throw Error('Nenhum treinamento atualizado.');

        return await Training.findByPk(id);
    }

    static async getAllTraining(){
        const currentDate = new Date();    

        return await Training.findAll({
            where: {
                [Op.or]: [
                    { due_date: { [Op.gte]: currentDate } }, // Data maior ou igual à data atual
                    { due_date: { [Op.is]: null } } // ou due_date é NULL
                ]
            }
        });
    }

    static async getTrainingById(id){
        const training = await Training.findByPk(id);

        if (!training) throw Error('Nenhum trinamento foi encontro.');

        return training;
    }

    static async getTrainingByName(query){
        return await Training.findAll({ where: { name: {  [Op.like]: `%${query}%` } } });
    }

}
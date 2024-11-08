import { Sequelize } from "sequelize";
import TrainingContent from "../model/TrainingContent.js"

export default class TrainingContentService {
    static async update(id, trainingContentData){
        const trainingContent = await TrainingContent.update( 
            trainingContentData,
            { where: { id: id }}
        );

        if (!trainingContent) throw Error('Training Content não existe.');

        if (trainingContent == 0) throw Error('Nenhum training content atualizado');

        return await TrainingContent.findByPk(id);
    }

    static async delete(id) {
        const trainingContent = await TrainingContent.findOne({ where: { id: id }});

        if (!trainingContent) throw Error('Training content não existe.');

        return await trainingContent.destroy();
    }

    static async getById(id) {
        return await TrainingContent.findByPk(id);
    }

    static async create(trainingContentData) {
        return await TrainingContent.create(trainingContentData);
    }

    static async getByTraining(id) {
        const trainingContent = await TrainingContent.findAll({
            where: {trainingId: id},
            order: [
                ['name', 'ASC']
            ]
        });
    
        if(!trainingContent || trainingContent.length === 0) throw Error('Nenhuma training Skill cadastrada');

        return trainingContent;
    }
}
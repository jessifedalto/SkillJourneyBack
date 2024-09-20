import TrainingSkill from "../model/TrainingSkill.js"

export default class TrainingSkillService {
    static async createTrainingSkill(trainingSkillData) {
        return await TrainingSkill.create(trainingSkillData);
    }

    static async updateTrainingSkill(id, trainingSkillData) {
        const trainingSkill = await TrainingSkill.update(
            trainingSkillData,
            {where: {id: id}}
        );

        if (!trainingSkill) throw Error('Training Skill não existe.');

        if (trainingSkill == 0) throw Error('Nenhuma training Skill atualizada.');

        return await TrainingSkill.findByPk(id);
    }

    static async deleteTrainingSkill(id) {
        const trainingSkill = await TrainingSkill.findOne({ where: { id: id }});

        if (!trainingSkill) throw Error('Training skill não existe.');

        return await trainingSkill.destroy();
    }

    static async getByTraining(id) {
        const trainingSkill = await TrainingSkill.findAll({where: {trainingId: id}});
    
        if(!trainingSkill) throw Error('Nenhuma training Skill cadastrada');

        return trainingSkill;
    }

    static async getBySkill(id) {
        const trainingSkill = await TrainingSkill.findAll({where: {trainingId: id}});
    
        if(!trainingSkill) throw Error('Nenhuma training Skill cadastrada');

        return trainingSkill;
    }
}
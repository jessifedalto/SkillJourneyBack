import TrainingTag from "../model/TrainingTag.js"
import Tag from "../model/Tag.js"
import Training from "../model/Training.js"

export default class TrainingTagService {
    static async create(trainingTagData) {
        const trainingTag = await TrainingTag.findOne({ where: { trainingId: trainingTagData.trainingId, tagId: trainingTagData.tagId } });

        if (trainingTag) throw new Error('A tag já está associada a esse conteúdo.')

        return await TrainingTag.create(trainingTagData);
    }

    static async delete(id) {
        const trainingTag = await TrainingTag.findOne({ where: { id: id } });

        if (!trainingTag) throw Error('Training skill não existe.');

        return await trainingTag.destroy();
    }

    static async getByTraining(id) {
        const results = await TrainingTag.findAll({ where: { trainingId: id } });

        if (!results) throw Error('Nenhuma training  tag cadastrada');
        
        const tagsPromises = results.map(async tc => {
            const tag = await Tag.findByPk(tc.tagId);
            return {
                id: tc.id,
                tagId: tag.id,
                name: tag.name,
            };
        });
    
        const tags = await Promise.all(tagsPromises);
        
        return tags;
    }

    static async getByTag(id) {
        const results = await TrainingTag.findAll({ where: { tagId: id } });

        if (!results) throw Error('Nenhuma training  tag cadastrada');
        
        const trainingPromises = results.map(async tc => {
            const training_ = await Training.findByPk(tc.trainingId);
            return {
                id: tc.id,
                trainingId: training_.id,
                name: training_.name
            };
        });
    
        const trainingss = await Promise.all(trainingPromises);
        return trainingss;
    }
}
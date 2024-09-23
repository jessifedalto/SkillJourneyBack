import TrainingContentTag from "../model/TrainingContentTag.js"
import Tag from "../model/Tag.js"
import TrainingContent from "../model/TrainingContent.js"

export default class TrainingContentTagService {
    static async create(trainingContentTagData) {
        const trainingContentTag = await TrainingContentTag.findOne({ where: { trainingContentId: trainingContentTagData.trainingContentId, tagId: trainingContentTagData.tagId } });

        if (trainingContentTag) throw new Error('A tag já está associada a esse conteúdo.')

        return await TrainingContentTag.create(trainingContentTagData);
    }

    static async delete(id) {
        const trainingContentTag = await TrainingContentTag.findOne({ where: { id: id } });

        if (!trainingContentTag) throw Error('Training skill não existe.');

        return await trainingContentTag.destroy();
    }

    static async getByTrainingContent(id) {
        const results = await TrainingContentTag.findAll({ where: { trainingContentId: id } });

        if (!results) throw Error('Nenhuma training content tag cadastrada');
        
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
        const results = await TrainingContentTag.findAll({ where: { tagId: id } });

        if (!results) throw Error('Nenhuma training content tag cadastrada');
        
        const trainingContentPromises = results.map(async tc => {
            const training_content = await TrainingContent.findByPk(tc.trainingContentId);
            return {
                id: tc.id,
                trainingContentId: training_content.id,
                name: training_content.name
            };
        });
    
        const trainingscontents = await Promise.all(trainingContentPromises);
        return trainingscontents;
    }
}
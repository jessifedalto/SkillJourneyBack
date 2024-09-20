import TrainingContentTag from "../model/TrainingContentTag.js"

export default class TrainingContentTagService {
    static async create(trainingContentTagData) {
        return await TrainingContentTag.create(trainingContentTagData);
    }

    static async delete(id) {
        const trainingContentTag = await TrainingContentTag.findOne({ where: { id: id } });

        if (!trainingContentTag) throw Error('Training skill não existe.');

        return await trainingContentTag.destroy();
    }

    static async getByTrainingContent(id) {
        const trainingContentTag = await TrainingContentTag.findAll({ where: { trainingContentId: id } });

        if (!trainingContentTag) throw Error('Nenhuma training content tag cadastrada');

        return trainingContentTag;
    }

    static async getByTag(id) {
        const trainingContentTag = await TrainingContentTag.findAll({ where: { tagId: id } });

        if (!trainingContentTag) throw Error('Nenhuma training content tag cadastrada');

        return trainingContentTag;
    }
}
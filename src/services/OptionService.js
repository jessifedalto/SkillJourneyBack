import Option from "../model/Option.js"

export default class OptionService {
    static async create(optionData) {
        return await Option.create(optionData);
    }

    static async update(id, optionData) {
        const option = await Option.update(
            optionData,
            { where: { id: id } }
        )

        if (!option) throw Error('Alternativa não existe.');

        if (option == 0) throw Error('Nenhuma alternativa atualizada.');

        return await Option.findByPk(id);
    }

    static async delete(id) {
        const option = await Option.findOne({ where: { id: id } });

        if (!option) throw Error('Alternativa não encontrada');

        return await option.destroy();
    }

    static async getByQuestion(id) {
        return await Option.findAll({ where: { questionId: id } });
    }

    static async getOption(id) {
        return await Option.findByPk(id);
    }
}
import OptionService from "../services/OptionService";

export default class OptionController {
    static async create(req, res) {
        const { questionId } = req.params;
        const { text, isRight } = req.body;

        if (!text || !isRight) return res.status(400).send({ message: "A afirmação e se ela é correta são obrigatórios." });
        if (!questionId) return res.status(400).send({ message: "O id da questão é obrigatório." });

        const option = {
            questionId: questionId,
            text: text,
            is_right: isRight
        };

        try {
            const newOption = await OptionService.create(option);
            return res.status(201).send({ id: newOption.id, message: "Alternativa criada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar alternativa.", message: error.message });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { text, isRight } = req.body;

        if (!text || !isRight) return res.status(400).send({ message: "A afirmação e se ela é correta são obrigatórios." });
        if (!id) return res.status(400).send({ message: "O id da questão é obrigatório." });

        const option = {
            questionId: id,
            text: text,
            is_right: isRight
        };

        try {
            const updatedOption = await OptionService.update(id, option);
            return res.status(200).send({ Alternativa: updatedOption, message: "Alternativa atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar alternativa.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id da alternativa é obrigatório." });

        try {
            await OptionService.delete(id);
            return res.status(200).send({ message: "Alternativa deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar alternativa.", message: error.message });
        }
    }

    static async getByQuestion(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id da questão é obrigatório." });

        try {
            await OptionService.getByQuestion(id);
            return res.status(200).send({ message: "Alternativas encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao encontrar alternativas.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({message: 'O id da alternativa é obrigatório'});

        try {
            const option = await OptionService.getOption(id);
            return res.status(200).send({ Alternativa: option, message: "Alternativa encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar alternativa.", message: error.message });
        }
    }
}
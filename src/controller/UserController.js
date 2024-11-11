import UserService from "../services/UserService.js";

export default class UserController {
    static async update(req, res) {
        const { id } = req.params;
        const { email, password, role } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' });

        if (!email && !password && !role) return res.status(400).send({ message: 'Algum dado deve ser alterado' });

        const user = {
            email: email,
            password: password,
            role: role,
        };

        try {
            const newUser = await UserService.updateUser(id, user);
            return res.status(200).send({ data: newUser, message: "User atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar User.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({message: 'O id do user é obrigatório'});

        try {
            const user = await UserService.getUser(id);
            return res.status(200).send({ data: user, message: "User encontrado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar user.", message: error.message });
        }
    }
}
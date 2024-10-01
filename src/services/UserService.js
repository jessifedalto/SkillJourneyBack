import User from "../model/User.js";

export default class UserService {
    static async createUser(userData) {
        userData.password = await User.hashPassword(userData.password);

        return await User.create(userData);
    }

    static async validateUser(email, password) {
        const user = await User.findOne({ where: { email: email } });

        if (!user)
            throw new Error('Usuário não cadastrado');

        if (!(await User.verifyPassword(password, user.password))) {
            throw new Error('Senha inválida');
        }

        return user;
    }

    static async validateEmailUser(email) {
        const user = await User.findOne({ where: { email: email } });

        if (user) throw new Error('Usuário já cadastrado');
    }

    static async updateUser(id, userData) {
        userData.password = await User.hashPassword(userData.password);
        const user = await User.update(
            userData,
            { where: {id: id}}
        );

        if (!user) throw Error('User não existe');

        if (user == 0) throw Error('Nenhum User atualizado.');

        return await User.findByPk(id);
    }

    static async getUser(id) {
        return await User.findByPk(id);
    }
}
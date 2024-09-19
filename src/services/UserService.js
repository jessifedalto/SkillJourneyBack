import User from "../model/User.js";

export default class UserService
{
    static async createUser(userData) {
        userData.password = await User.hashPassword(userData.password);
        console.log(userData);
        return await User.create(userData);
    }

    static async validateUser(email, password) {
        const user = await User.findOne({ where: { email: email } });

        if (!user)
            throw new Error('Usuário não cadastrado');

        if (!(await  user.verifyPassword(password))) {
            throw new Error('Senha inválida');
        }

        return user;
    }
}
import User from "../model/User.js";

export default class UserService
{
    static async createUser(userData) {
        const user = await User.findOne({ where: { email: userData.email } });

        if (user)
            throw new Error('Usuário já cadastrado');
        
        userData.password = await User.hashPassword(userData.password);

        return await User.create(userData);
    }

    static async validateUser(email, password) {
        const user = await User.findOne({ where: { email: email } });

        if (!user)
            throw new Error('Usuário não cadastrado');

        if (!(await  User.verifyPassword(password, user.password))) {
            throw new Error('Senha inválida');
        }

        return user;
    }
}
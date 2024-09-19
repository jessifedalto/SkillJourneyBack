import User from "../model/User.js";

export default class UserService
{
    async createUser(userData) {
        userData.password = await User.hashPassword(userData.password);
        
        return await User.create(userData);
    }

    async validateUser(email, password) {
        const user = await User.findOne({ where: { email: email } });

        if (!user)
            throw new Error('Usuário não cadastrado');

        if (!(await  user.verifyPassword(password))) {
            throw new Error('Senha inválida');
        }

        return user;
    }
}
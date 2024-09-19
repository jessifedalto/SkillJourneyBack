import User from "../model/User.js";

export default class UserService
{
    async criarUsuario(userData) {
        userData.password = await User.hashPassword(userData.password);
        
        return await User.create(userData);
    }

    async validarUsuario(userData) {
        const user = await User.findOne({ where: { email: userData.email, edv: userData.edv } });

        if (user)
            throw new Error("Email or Edv already exists.")

        if (!(await user.verifyPassword(userData.password))) {
            throw new Error("Invalid password!")
        }

        return;
    }
}
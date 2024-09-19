import User from "../model/User";

export default class UserService
{
    async criarUsuario(user) {
        
        await User.create(user);
    }

    async validarUsuario(email, edv, password) {
        const user = await User.findOne({ $or: [{ email: email } , { edv: edv }] });

        if (!user) {
            throw new Error("Email or Edv already exists.")
        }

        if (!user || !(await user.verifyPassword(password))) {
            throw new Error("Invalid password!")
        }

        return user;
    }
}
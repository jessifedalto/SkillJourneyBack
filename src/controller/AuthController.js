import EmployeeService from "../services/EmployeeService.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import UserService from "../services/UserService.js";
import jwt from 'jsonwebtoken';

export default class AuthController {

    static async register(req, res) {

        const { full_name, birth_date, hire_date, position, departmentId, edv, email, role } = req.body;

        if (!full_name) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!birth_date) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!hire_date) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!position) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!departmentId) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!email) return res.status(400).json({ message: "O e-mail é obrigatório" });
        if (!edv) return res.status(400).json({ message: "O login é obrigatório" });
        if (!role) return res.status(400).json({ message: "O login é obrigatório" });

        const employee = {
            full_name: full_name,
            birth_date: birth_date,
            hire_date: Date.now(),
            position: position,
            departmentId: departmentId,
            edv: edv
        };

        if (edv.lenght > 8) 
            return res.status(400).send({ message: "Edv maior do que o esperado"})

        try {
            await EmployeeService.validateEmployee(employee);
            await UserService.validateEmailUser(email);

            const createdEmployee = await EmployeeService.createEmployee(employee);

            const user = {
                email: email,
                password: edv,
                role: role,
                employeeId: createdEmployee.id
            };

            await UserService.createUser(user);
            return res.status(201).send({ message: "Funcionário criado com sucesso"})
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failed", error: error.message })
        }

    }

    static async login(req, res) {

        const { email, password } = req.body;

        if (!email) return res.status(400).json({ message: "O e-mail é obrigatório" });
        if (!password) return res.status(400).json({ message: "A senha é obrigatória" });

        try {
            const user = await UserService.validateUser(email, password);

            if (!user || !await bcrypt.compare(password, user.password)) {
                return res.status(400).send({ message: "Invalid Email or password" });
            }
            
            const employee = await EmployeeService.getEmployee(user.employeeId);
            
            const tk = jwt.sign(
                { full_name: employee.full_name, id: user.id, role: user.role , employeeId: user.employeeId },
                process.env.SECRET,
                { expiresIn: '2d' }
            );
            return res.status(200).send({ token: tk , firstAccess: password === employee.edv });

        } catch (error) {
            return res.status(500).send({ message: "Error processing request", error: error.message });
        }

    } // faz uma verificação das strings sem o bcript
}

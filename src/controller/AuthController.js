import Employee from "../model/Employee";
import User from "../model/User";
import UserService from "../services/UserService";

export default class AuthController {
    static async register(req, res) 
    {
        var key = process.env.SECRET;
        var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, key);
        const decryptd = bytes.toString(CryptoJS.enc.Utf8);
        const json = JSON.parse(decryptd);

        const { full_name, birth_date, hire_date, position, departmentId, edv, email, role } = json;

        if (!full_name) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!birth_date) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!hire_date) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!position) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!departmentId) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!email) return res.status(400).json({ message: "O e-mail é obrigatório" });
        if (!edv) return res.status(400).json({ message: "O login é obrigatório" });
        if (!role) return res.status(400).json({ message: "O login é obrigatório" });

        const userService = new UserService();

        const employee = new Employee({
            full_name: full_name,
            birth_date: birth_date,
            hire_date: Date.now(),
            position: position,
            departmentId: departmentId,
            edv: edv
        });

        const verifyEmployee = await Employee.create(employee);

        if (!verifyEmployee) {
            throw new Error("Invalid data");
        }

        const user = new User({
            email: email,
            password: full_name + edv,
            role: role,
            employeeId: employee.id
        });

        try {
            await userService.validarUsuario(user);
            await userService.criarUsuario(user);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failed" })
        }
        
    }

    static async login(req, res)
    {
        
    }

    static async verifyJWT(req, res, next)
    {
        // const authHeader = req.headers.authorization;
        // if (!authHeader) return res.status(401).json({ message: 'No token provided.' });

        // const [scheme, token] = authHeader.split(' ');

        // jwt.verify(token, process.env.SECRET, function(err, decoded) {
        //     if (err) return res.status(401).json({ message: 'Unauthorized' });

        //     req.userId = decoded.id;
        //     req.authorId = decoded.author;
        //     req.username = decoded.name;
        //     next();
        // });
    }
}

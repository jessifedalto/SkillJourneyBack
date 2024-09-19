import Employee from "../model/Employee.js";
import User from "../model/User.js";
import EmployeeService from "../services/EmployeeService.js";
import UserService from "../services/UserService.js";

export default class AuthController {

    static userService = new UserService();

    static async register(req, res) {

        const { full_name, birth_date, hire_date, position, departmentId, edv, email, role } = req.json;

        if (!full_name) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!birth_date) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!hire_date) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!position) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!departmentId) return res.status(400).json({ message: "O nome é obrigatório" });
        if (!email) return res.status(400).json({ message: "O e-mail é obrigatório" });
        if (!edv) return res.status(400).json({ message: "O login é obrigatório" });
        if (!role) return res.status(400).json({ message: "O login é obrigatório" });

        const employeeService = new EmployeeService();

        const employee = new Employee({
            full_name: full_name,
            birth_date: birth_date,
            hire_date: Date.now(),
            position: position,
            departmentId: departmentId,
            edv: edv
        });

        const verifyEmployee = await employeeService.validateEmployee(employee);

        if (!verifyEmployee) {
            throw new Error("Já cadastrado");
        }

        await employeeService.createEmployee(employee);

        const user = new User({
            email: email,
            password: full_name + edv,
            role: role,
            employeeId: employee.id
        });

        try {
            await this.userService.createUser(user);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failed" })
        }

    }

    static async login(req, res) {
        var key = process.env.SECRET;
        var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, key);
        const decryptd = bytes.toString(CryptoJS.enc.Utf8);
        const json = JSON.parse(decryptd);
      
        const { email, password } = json;

        if (!email) return res.status(400).json({ message: "O e-mail é obrigatório" });
        if (!password) return res.status(400).json({ message: "A senha é obrigatória" });

        try {
            const user = await this.userService.validateUser(email, password)

            if (!user || !await bcrypt.compare(password, user.password)) {
                return res.status(400).send({ message: "Invalid Email or password" });
            }

            const tk = jwt.sign(
                { id: user.id },
                process.env.SECRET,
                { expiresIn: '2d' }
            );

            return res.status(200).send({ token: tk });


        } catch(error) {
            console.log(error);
            return res.status(500).send({ message: "Error processing request" });
        }

    }

    static async verifyJWT(req, res, next) {
        // const authHeader = req.headers.authorization;
        // if (!authHeader) return res.status(401).json({ message: 'No token provided.' });

        // const [scheme, token] = authHeader.split(' ');

        // jwt.verify(token, process.env.SECRET, function (err, decoded) {
        //     if (err) return res.status(401).json({ message: 'Unauthorized' });

        //     req.userId = decoded.id;
        //     req.employeeId = decoded.employeeId;
        //     req.full_name = decoded.full_name;

        //     try {
        //         var key = process.env.SECRET;
        //         var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, key);
        //         const decryptd = bytes.toString(CryptoJS.enc.Utf8);
        //         const json = JSON.parse(decryptd);
        //         req.json = json;
        //         next();

        //     } catch(eror) {
        //         req.json = req.body;
        //         next();
        //     }
            
        // });
    }


}

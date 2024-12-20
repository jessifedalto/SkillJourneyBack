import EmployeeService from "../services/EmployeeService.js";

export default class EmployeeController {
    static async update(req, res) {
        const { id } = req.params;
        const { fullName, birthDate, hireDate, position, edv } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' });

        if (!fullName && !birthDate && !hireDate && !position && !edv) return res.status(400).send({ message: 'Algum dado deve ser alterado' });

        const employee = {
            full_name: fullName,
            birth_date: birthDate,
            hire_date: hireDate,
            position: position,
            edv: edv
        };

        try {
            const newEmployee = await EmployeeService.updateEmployee(id, employee);
            return res.status(200).send({ data: newEmployee, message: "Employee atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar Employee.", message: error.message });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id do employee é obrigatório." });

        try {
            await EmployeeService.deleteEmployee(id);
            return res.status(200).send({ message: "Employee deletado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar employee.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({message: 'O id do employee é obrigatório'});

        try {
            const employee = await EmployeeService.getEmployee(id);
            return res.status(200).send({ data: employee, message: "Employee encontrado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employee.", message: error.message });
        }
    }

    static async getAll(req, res) {
        const pageIndex = parseInt(req.query.pageIndex) - 1 || 0;
        const pageSize = parseInt(req.query.pageSize) || 10;
        try {
            const employees = await EmployeeService.getAllEmployees();
            const items = employees.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize); 
            return res.status(200).send({ total: employees.length, data: items, message: "Employees encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employees.", message: error.message });
        }
    }

    static async getByDepartment(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({message: 'O id do departamento é obrigatório'});

        try {
            const employees = await EmployeeService.getByDepartment(id);
            return res.status(200).send({ data: employees, message: "Employees do departamento encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employees do departamento.", message: error.message });
        }
    }

    static async getByName(req, res) {
        const { name } = req.params;
        const pageIndex = parseInt(req.query.pageIndex) - 1 || 0;
        const pageSize = parseInt(req.query.pageSize) || 10;

        if (!name) return res.status(400).send({message: 'O nome do employees é obrigatório'});

        try {
            const employees = await EmployeeService.getEmployeeByName(name);
            const items = employees.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize); 
            return res.status(200).send({ data: items, message: "Employees encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employees.", message: error.message });
        }

    }
}
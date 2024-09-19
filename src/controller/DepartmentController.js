import DepartmentService from "../services/DepartmentService.js";
import Department from "../model/Department.js";

export default class DepartmentController
{

    static departmentService = new DepartmentService();

    static async create(req, res)
    {
        const { name } = req.json;

        if (!name) return res.status(400).send({ message: "O nome do departamento é obrigatório." });

        const department = new Department({
            name: name
        });
        try {
            await this.departmentService.exists(department);
            const newDepartament = await this.departmentService.createDepartment(department);
            return res.status(201).send({ id: newDepartament.id,  message: "Departamento criado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar departamento.", message: error.message });
        }
    }

    static async update(req, res)
    {
        const { name } = req.json;

        if (!name) return res.status(400).send({ message: "O nome do departamento é obrigatório." });

        const department = new Department({
            name: name
        });

        try {
            const newDepartament = await this.departmentService.updateDepartament(department);
            return res.status(201).send({ department: newDepartament,  message: "Departamento atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar o departmento.", message: error.message });
        }

    }

    static async delete(req, res)
    {
        const { name } = req.json;

        if (!name) return res.status(400).send({ message: "O nome do departamento é obrigatório." });

        const department = new Department({
            name: name
        });

        try {
            await this.departmentService.deleteDepartament(department);
            return res.status(201).send({ message: "Departamento deletado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar departmento.", message: error.message });
        }
    }

    static async getAll(req, res)
    {
        try {
            const departaments = await this.departmentService.getAllDepartament();
            return res.status(201).send({ data: departaments, message: "Departamentos encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar departmentos.", message: error.message });
        }
    }
}
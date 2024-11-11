import DepartmentService from "../services/DepartmentService.js";

export default class DepartmentController
{
    static async create(req, res)
    {
        const { name } = req.body;

        if (!name) return res.status(400).send({ message: "O nome do departamento é obrigatório." });

        const department = {
            name: name
        };
        try {
            await DepartmentService.exists(department.name);
            const new_department = await DepartmentService.createDepartment(department);
            return res.status(201).send({ id: new_department.id,  message: "Departamento criado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar departamento.", message: error.message });
        }
    }

    static async update(req, res)
    {
        const { id } = req.params;
        const { name } = req.body;

        if (!id) return res.status(400).send({ message: "O id do departamento é obrigatório." });

        if (!name) return res.status(400).send({ message: "O nome do departamento é obrigatório." });

        const department = {
            name: name
        };

        try {
            const updated_department = await DepartmentService.updateDepartament(id, department);
            return res.status(200).send({ department: updated_department,  message: "Departamento atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar o departmento.", message: error.message });
        }

    }

    static async delete(req, res)
    {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id do departamento é obrigatório." });

        try {
            await DepartmentService.deleteDepartament(id);
            return res.status(200).send({ message: "Departamento deletado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar departmento.", message: error.message });
        }
    }

    static async getAll(req, res)
    {
        try {
            const departaments = await DepartmentService.getAllDepartament();
            return res.status(200).send({ data: departaments, message: "Departamentos encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar departmentos.", message: error.message });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({message: 'O id do departamento é obrigatório'});

        try {
            const department = await DepartmentService.getDepartment(id);
            return res.status(200).send({ data: department, message: "Departamento encontrado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar departamento.", message: error.message });
        }
    }
}
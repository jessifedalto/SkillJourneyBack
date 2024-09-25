import EmployeeSkillService from "../services/EmployeeSkillService.js";

export default class EmployeeSkillController {
    static async create(req, res) {
        const { employeeId, skillId } = req.params;
        const { proficiencyLevel, assessmentDate, developmentPlan } = req.body;

        if (!employeeId || !skillId) return res.status(400).send({ message: 'Os id são obrigatórios' })

        if (!proficiencyLevel) return res.status(400).send({ message: 'O nível de proficiência é obrigatório' })

        if (!assessmentDate) return res.status(400).send({ message: 'A data de aquisição é obrigatório' })

        const employeeSkill = {
            employeeId: employeeId,
            skillId: skillId,
            profeciency_level: proficiencyLevel,
            assessment_date: assessmentDate,
            developmentPlan: developmentPlan
        };

        try {
            const newEmployeeSkill = await EmployeeSkillService.createEmployeeSkill(employeeSkill);
            return res.status(201).send({ id: newEmployeeSkill.id, message: 'Employee Skill cadastrada' });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar Employee Skill.", message: error.message });
        }

    }

    static async update(req, res) {
        const { id } = req.params;
        const { proficiencyLevel, assessmentDate, developmentPlan } = req.body;

        if (!id) return res.status(400).send({ message: 'O id é obrigatório' })

        if (!proficiencyLevel && !assessmentDate && !developmentPlan) return res.status(400).send({ message: 'Algum parametro deve ser alterado' })

        const employeeSkill = {
            proficiency_level: proficiencyLevel,
            assessment_date: assessmentDate,
            developmentPlan: developmentPlan
        };

        try {
            const newEmployeeSkill = await EmployeeSkillService.updateEmployeeSkill(id, employeeSkill);
            return res.status(200).send({ EmployeeSkill: newEmployeeSkill, message: "Employee Skill atualizada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar Employee Skill.", message: error.message });
        }

    }

    static async delete(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id do employee é obrigatório." });

        try {
            await EmployeeSkillService.deleteEmployeeSkill(id);
            return res.status(200).send({ message: "Employee Skill deletada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao deletar Employee Skill.", message: error.message });
        }
    }

    static async getByEmployee(req, res) {
        const { id } = req.params;

        try {
            const employeeSkills = await EmployeeSkillService.getEmployeeSkillByEmployee(id);
            return res.status(200).send({ employeeSkills: employeeSkills, message: "Employee skills encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employee skills.", message: error.message });
        }
    }

    static async getBySkill(req, res) {
        const { id } = req.params;

        try {
            const skillsEmployee = await EmployeeSkillService.getEmployeeSkillBySkill(id);
            return res.status(200).send({ employees: skillsEmployee, message: "Employee skills encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar employee skills.", message: error.message });
        }
    }
}
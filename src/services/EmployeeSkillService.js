import Employee from '../model/Employee.js';
import EmployeeSkill from '../model/EmployeeSkill.js'
import Skill from '../model/Skill.js'


export default class EmployeeSkillService {
    static async createEmployeeSkill(employeeSkillData) {
        return await EmployeeSkill.create(employeeSkillData);
    }

    static async updateEmployeeSkill(id, employeeSkillData) {
        const employeeSkill = await EmployeeSkill.update(
            employeeSkillData,
            { where: { id: id } }
        );

        if (!employeeSkill) throw Error('Employee skill não existe');

        if (employeeSkill == 0) throw Error('Nenhum employee skill atualizado.');

        return await EmployeeSkill.findByPk(id);
    }

    static async getEmployeeSkillByEmployee(id) {
        const employeeSkills = await EmployeeSkill.findAll({ where: { employeeId: id } });

        if (!employeeSkills) throw Error('Nenhuma Employee Skill cadastrada');

        const skillPromises = employeeSkills.map(async se => {
            const skill = await Skill.findByPk(se.skillId);
            return skill;
        });
    
        const skills = await Promise.all(skillPromises);
        
        return skills;
    }

    static async getEmployeeSkillBySkill(id) {
        const skillsEmployee = await EmployeeSkill.findAll({ where: { skillId: id } });

        if (!skillsEmployee) throw Error('Nenhuma Employee Skill cadastrada');

        const employeePromises = skillsEmployee.map(async se => {
            const employee = await Employee.findByPk(se.employeeId);
            return employee;
        });
    
        const employees = await Promise.all(employeePromises);
        
        return employees;
    }

    static async deleteEmployeeSkill(id) {
        const skillsEmployee = await EmployeeSkill.findOne({ where: { employeeId: id } });

        if (!skillsEmployee) throw Error('Employee Skill não existe.');

        return await skillsEmployee.destroy();
    }
}
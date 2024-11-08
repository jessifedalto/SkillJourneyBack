import Employee from "../model/Employee.js";
import { Op } from 'sequelize';

export default class EmployeeService {
    static async createEmployee(employeeData) {
        return await Employee.create(employeeData);
    }

    static async validateEmployee(employeeData) {
        const employee = await Employee.findOne({ where: { edv: employeeData.edv } });

        if (employee)
            throw new Error('Edv já cadastrado');

        return;
    }

    static async updateEmployee(id, employeeData) {
        const employee = await Employee.update(
            employeeData,
            { where: { id: id } }
        );

        if (!employee) throw Error('Employee não existe');

        if (employee == 0) throw Error('Nenhum employee atualizado.');

        return await Employee.findByPk(id);
    }

    static async deleteEmployee(id) {
        const employee = await Employee.findByPk(id);

        if (!employee) throw Error('Employee não existe.')

        return await employee.destroy();
    }

    static async getAllEmployees() {
        return await Employee.findAll({
            order: [
                ['name', 'ASC']
            ]
        });
    }

    static async getEmployee(id) {
        return await Employee.findByPk(id);
    }

    static async getByDepartment(id) {
        return await Employee.findAll({where: { departmentId : id}});
    }

    static async getEmployeeByName(query){
        return await Employee.findAll({ where: { full_name: {  [Op.like]: `%${query}%` } } });
    }
}
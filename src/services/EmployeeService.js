import Employee from "../model/Employee.js";

export default class EmployeeService {
    static async createEmployee(employeeData)
    {
        return await Employee.create(employeeData);
    }

    static async validateEmployee(employeeData)
    {
        const employee = await Employee.findOne({ where: { edv: employeeData.edv } });

        if (employee)
            throw new Error('Edv já cadastrado');

        return;
    }
}
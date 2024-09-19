import Employee from "../model/Employee.js";

export default class EmployeeService {
    async createEmployee(employeeData)
    {
        return await Employee.create(employeeData);
    }

    async validateEmployee(employeeData)
    {
        const employee = await Employee.findOne({ where: { email: employeeData.edv } });

        if (employee)
            throw new Error('Edv already used.');

        return;
    }
}
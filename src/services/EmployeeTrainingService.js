import Employee from '../model/Employee.js';
import EmployeeTraining from '../model/EmployeeTraining.js'
import Training from '../model/Training.js';

export default class EmployeeTrainingService {
    static async createEmployeeTraining(employeeTrainingData) {
        return await EmployeeTraining.create(employeeTrainingData);
    }

    static async deleteEmployeeTraining(id) {
        const employeeTraining = await EmployeeTraining.findByPk(id);

        if(!employeeTraining) throw Error('Employee training não existe.');

        return await employeeTraining.destroy();
    }

    static async updateEmployeeTraining(id, employeeTrainingData) {
        const employeeTraining = await EmployeeTraining.update(
            employeeTrainingData,
            {where: {id: id}}
        );

        if(!employeeTraining) throw Error('Employee training não existe.');

        if(employeeTraining == 0) throw Error('Nenhum employee training atualizado');

        return await EmployeeTraining.findByPk(id);
    }

    static async getEmployeeTrainingByEmployee(id) {
        const employeeTraining = await EmployeeTraining.findAll({where: {employeeId: id}});

        if(!employeeTraining) throw Error('Nenhuma employee training cadastrada');

        const trainingPromises = employeeTraining.map(async et => {
            const training = await Training.findByPk(et.trainingId);
            return training;
        });
        const trainings = await Promise.all(trainingPromises);

        return trainings;
    }

    static async getEmployeeTrainingByTraining(id) {
        const employeeTraining = await EmployeeTraining.findAll({where: {trainingId: id}});

        if(!employeeTraining) throw Error('Nenhuma employee training cadastrada');

        const employeePromises = employeeTraining.map(async et => {
            const employee = await Employee.findByPk(et.employeeId);
            return employee;
        });
    
        const employees = await Promise.all(employeePromises);

        return employees;
    }

    static async getEmployeeTrainingById(id) {
        const employeeTraining = await EmployeeTraining.findByPk(id);

        if(!employeeTraining) throw Error('Nenhuma employee training cadastrada');

        return employeeTraining;
    }
}
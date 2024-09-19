import Department from '../model/Department.js'

export default class DepartmentService
{
    static async createDepartment(departamentData){
        return await Department.create(departamentData);
    }

    static async exists(name){
        const departament = await Department.findOne({ where: { name: name }});
        
        if(departament) throw Error('Departamento já existe.');

        return departament;
    }

    static async deleteDepartament( id ){
        const departament = await Department.findOne({ where: { id: id }});

        if (!departament) throw Error('Departamento não existe.');

        return await departament.destroy();
    }

    static async updateDepartament( id, departamentData ){
        const departament = await  Department.update( departamentData,
            { where: { id: id }}
        );

        if (!departament) throw Error('Departamento não existe.');

        return Department.findByPk(id);
    }

    static async getAllDepartament(){
        const departament = await Department.findAll();

        if (!departament) throw Error('Nenhum departamento foi registrado.');

        return departament;
    }

}
import Department from '../model/Department.js'

export default class DepartmentService
{
    async createDepartment(departamentData){
        return await Department.create(departamentData);
    }

    async exists(name){
        const departament = await Department.findOne({ where: { name: name }});
        
        if(departament) throw Error('Departamento já existe.');

        return departament;
    }

    async deleteDepartament( id ){
        const departament = await Department.findOne({ where: { id: id }});

        if (!departament) throw Error('Departamento não existe.');

        return await departament.destroy();
    }

    async updateDepartament( id, departamentData ){
        const departament = await  Department.update( departamentData,
            { where: { id: id }}
        );

        if (!departament) throw Error('Departamento não existe.');

        return Department.findByPk(id);
    }

    async getAllDepartament(){
        const departament = await Department.findAll();

        if (!departament) throw Error('Nenhum departamento foi registrado.');

        return departament;
    }

}
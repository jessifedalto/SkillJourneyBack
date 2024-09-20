import Department from '../model/Department.js'

export default class DepartmentService
{
    static async createDepartment(departament_data){
        return await Department.create(departament_data);
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

    static async updateDepartament( id, departament_data ){
        const departament = await Department.update( 
            departament_data,
            { where: { id: id }}
        );

        if (!departament) throw Error('Departamento não existe.');

        if (departament == 0) throw Error('Nenhum departamento atualizado.');

        return await Department.findByPk(id);
    }

    static async getAllDepartament(){
        return await Department.findAll();
    }

}
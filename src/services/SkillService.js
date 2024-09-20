import Skill from '../model/Skill.js'

export default class SkillService
{
    static async createSkill(skill_data){
        return await Skill.create(skill_data);
    }

    static async exists(name){
        const skill = await Skill.findOne({ where: { name: name }});
        
        if(skill) throw Error('Skill já existe.');

        return skill;
    }

    static async deleteSkill( id ){
        const skill = await Skill.findByPk(id);

        if (!skill) throw Error('Skill não existe.');

        return await skill.destroy();
    }

    static async updateSkill( id, skill_data ){
        const skill = await Skill.update( 
            skill_data,
            { where: { id: id }}
        );

        if (!skill) throw Error('Skill não existe.');

        if (skill == 0) throw Error('Nenhuma skill atualizada.');

        return await Skill.findByPk(id);
    }

    static async getAllSkills(){
        const skill = await Skill.findAll();

        if (!skill) throw Error('Nenhuma skill foi encontra.');

        return skill;
    }

    static async getSkillById(id){
        const skill = await Skill.findByPk(id);

        if (!skill) throw Error('Nenhuma skill foi encontra.');

        return skill;
    }

}
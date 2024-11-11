import SkillService from "../services/SkillService.js";

export default class SkillController
{
    static async create(req, res)
    {
        const { name, description, type } = req.body;

        if (!name) return res.status(400).send({ message: "O nome da skill é obrigatório." });
        if (!type) return res.status(400).send({ message: "O tipo da skill é obrigatório." });

        const skill = {
            name: name,
            description: description,
            type: type
        };

        try {
            await SkillService.exists(skill.name);
            const new_skill = await SkillService.createSkill(skill);
            return res.status(201).send({ id: new_skill.id,  message: "Skill criada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao registrar skill.", message: error.message });
        }
    }

    static async update(req, res)
    {
        const { id } = req.params;
        const { name, description, type } = req.body;

        if (!id) return res.status(400).send({ message: "O id da skill é obrigatório." });

        if (!type && !name && !description) return res.status(400).send({ message: "Nenhuma informação informada." });

        const skill = {
            name: name,
            description: description,
            type: type
        };

        try {
            const updated_skill = await SkillService.updateSkill(id, skill);
            return res.status(200).send({ data: updated_skill,  message: "Skill atualizado com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao atualizar o skill.", message: error.message });
        }
    }

    static async getAll(req, res){
        const pageIndex = parseInt(req.query.pageIndex) - 1 || 0;
        const pageSize = parseInt(req.query.pageSize) || 15;
        try {
            const skills = await SkillService.getAllSkills();
            const items = skills.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize); 
            return res.status(200).send({ total: skills.length, data: items, message: "Skills encontradas com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar skills.", message: error.message });
        }
    }

    static async getById(req, res)
    {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id da skill é obrigatório." });

        try {
            const skills = await SkillService.getSkillById(id);
            return res.status(200).send({ data: skills, message: "Skill encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar skill.", message: error.message });
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "O id da skill é obrigatório." });

        try {
            await SkillService.deleteSkill(id);
            return res.status(200).send({ message: "Skill deletado com sucesso." });
        } catch (error) {
            if (error.name === 'SequelizeForeignKeyConstraintError')
                return res.status(400).json({ message: 'Não é possível excluir esta skill pois ela está sendo utilizada.' });
            return res.status(500).send({ error: "Erro ao deletar skill.", message: error.message });
        }
    }

    static async getByType(req, res){
        const { type } = req.params;

        if (!type) return res.status(400).send({ message: "O tipo da skill é obrigatório." });
        var formatted_type = type.toUpperCase();
        
        if (formatted_type !== "HARD" && formatted_type !== "SOFT") return res.status(400).send({ message: "O tipo da skill é inválido." });
        
        try {
            const skills = await SkillService.getSkillByType(formatted_type);
            return res.status(200).send({ data: skills, message: `${formatted_type} skills encontradas com sucesso.` });
        } catch (error) {
            return res.status(500).send({ error: `Erro ao encontrar ${formatted_type} skill.`, message: error.message });
        }
    }

    static async getByName(req, res) {
        const { name } = req.params;

        if (!name) return res.status(400).send({message: 'O nome da skill é obrigatório.'});

        try {
            const skills = await SkillService.getSkillByName(name);
            return res.status(200).send({ data: skills, message: "Skills encontrados com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar skills.", message: error.message });
        }
    }
}
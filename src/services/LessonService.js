import { Sequelize } from "sequelize";
import Lesson from "../model/Lesson.js"

export default class LessonService {
    static async update(id, lessonData){
        const lesson = await Lesson.update( 
            lessonData,
            { where: { id: id }}
        );

        if (!lesson) throw Error('Lesson não existe.');

        if (Lesson == 0) throw Error('Nenhuma lesson atualizado');

        return await Lesson.findByPk(id);
    }

    static async delete(id) {
        const lesson = await Lesson.findOne({ where: { id: id }});

        if (!lesson) throw Error('Lesson não existe.');

        return await Lesson.destroy();
    }

    static async getById(id) {
        return await Lesson.findByPk(id);
    }

    static async create(lessonData) {
        return await Lesson.create(lessonData);
    }

    static async getByTraining(id) {
        const lesson = await Lesson.findAll({
            where: {trainingId: id},
            order: [
                ['name', 'ASC']
            ]
        });
    
        if(!lesson || lesson.length === 0) throw Error('Nenhuma lesson cadastrada');

        return Lesson;
    }
}
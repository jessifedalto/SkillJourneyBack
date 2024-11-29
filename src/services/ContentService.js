import Content from "../model/Content.js";

export default class ContentService {

    static async getAllContent(){
        return await Content.findAll();
    }
    static async getContentByLesson(Id){
        return await Content.findAll({where: {lessonId: Id}});
    }
    
}
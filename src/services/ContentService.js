import Content from "../model/Content.js";

export default class ContentService {

    static async getAllContent(){
        return await Content.findAll();
    }
}
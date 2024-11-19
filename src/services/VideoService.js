
// import Video from '../model/Video.js';
import sequelizeInstance from '../../startup/db.js';

export default class VideoService {
    static async getChunksByVideoId(videoId) {
        try {
            const [results, metadata] = await sequelizeInstance.query(`SELECT * FROM tb_video WHERE id = ${videoId}`);

            return results;
        } catch (error) {
            throw new Error('Erro ao buscar chunks de vídeo: ' + error.message);
        }
    }

    static async getByContent(contentId){
        const [results, metadata] = await sequelizeInstance.query(`SELECT * FROM tb_video WHERE TrainingContentId = ${contentId}`);

        return results;

        // const videos = await Video.findAll({ where: { trainingContentId: contentId } });
        // return videos;

    }
}

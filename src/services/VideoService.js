
import Video from '../model/Video.js';

export default class VideoService {
    static async getChunksByVideoId(videoId) {
        try {
            const video = await Video.findByPk(videoId, {
                include: [{
                    model: 'tb_videochunk',
                    as: 'chunks'
                }]
            });

            return video;
        } catch (error) {
            throw new Error('Erro ao buscar chunks de vídeo: ' + error.message);
        }
    }

    static async getByContent(contentId){

        const videos = await Video.findAll({ where: { trainingContentId: contentId } });
        return videos;

    }
}

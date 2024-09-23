// services/videoService.js
import Video from '../models/Video.js';
import VideoChunck from '../model/VideoChunck.js';

export default class VideoService {
    static async getChunksByVideoId(videoId) {
        try {
            const video = await Video.findByPk(videoId, {
                include: [{
                    model: VideoChunck,
                    as: 'chunks'
                }]
            });

            return video;
        } catch (error) {
            throw new Error('Erro ao buscar chunks de vídeo: ' + error.message);
        }
    }
}

// services/videoService.js
import Video from '../model/Video.js';
import VideoChunk from '../model/VideoChunk.js';

export default class VideoService {
    static async getChunksByVideoId(videoId) {
        try {
            const video = await Video.findByPk(videoId, {
                include: [{
                    model: VideoChunk,
                    as: 'chunks'
                }]
            });

            return video;
        } catch (error) {
            throw new Error('Erro ao buscar chunks de vídeo: ' + error.message);
        }
    }
}

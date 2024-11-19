
// import Video from '../model/Video.js';
import sequelizeInstance from '../../startup/db.js';

export default class VideoService {
    static async getChunksByVideoId(videoId) {
        try {
            const [results, metadata] = await sequelizeInstance.query(
                'SELECT * FROM tb_video WHERE id = :videoId',
                {
                    replacements: { videoId }, // substitui :videoId pelo valor da variável videoId
                    type: sequelizeInstance.QueryTypes.SELECT // garante que o resultado será um array de resultados
                }
            );
        
            return results;
        } catch (error) {
            throw new Error('Erro ao buscar chunks de vídeo: ' + error.message);
        }
        
    }

    static async getByContent(contentId){
        try {
            const [results, metadata] = await sequelizeInstance.query(
                'SELECT * FROM tb_video WHERE TrainingContentId = :contentId', 
                {
                    replacements: { contentId }, // substitui :contentId pelo valor da variável contentId
                    type: sequelizeInstance.QueryTypes.SELECT // garante que o resultado será um array de resultados
                }
            );
        
            return results;
        } catch (error) {
            throw new Error('Erro ao buscar vídeos: ' + error.message);
        }
        

    }
}

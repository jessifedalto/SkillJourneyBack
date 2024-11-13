import VideoService from "../services/VideoService.js";

export default class VideoController {
    static async create(req, res) {

    }

    static async update(req, res) {

    }

    static async delete(req, res) {

    }

    static async getByTrainingContent(req, res) {
        const { id } = req.params;
        try {
            const videos = await VideoService.getByContent(id);
            const items = videos.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize); 
            return res.status(200).send({ total:videos.length, data: items, message: "videos encontrada com sucesso." });
        } catch (error) {
            return res.status(500).send({ error: "Erro ao buscar videos.", message: error.message });
        }
    }

    static async getById(req, res) {

    }

    static async getChunks(req, res) {
        const { videoId } = req.params;

        try {
            const video = await VideoService.getChunksByVideoId(videoId);

            if (!video) {
                return res.status(404).json({ message: 'Vídeo não encontrado' });
            }

            return res.json(video.chunks);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar chunks de vídeo' });
        }

    }
}
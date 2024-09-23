export default class DocumentController {
    static async create(req, res) {

    }

    static async update(req, res) {

    }

    static async delete(req, res) {

    }

    static async getByTrainingContent(req, res) {

    }

    static async getById(req, res) {

    }

    static async getChunks(req, res) {
        const { documentId } = req.params;

        try {
            const document = await DocumentService.getChunksByDocumentId(documentId);

            if (!document) {
                return res.status(404).json({ message: 'Documento não encontrado' });
            }

            return res.json(document.chunks);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar chunks de documento' });
        }
    }
}
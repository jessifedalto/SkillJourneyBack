import Document from "../model/Document.js";
import DocumentChunk from "../model/DocumentChunk.js";

export default class DocumentService {
    static async getChunksByDocumentId(documentId) {
        try {
            const document = await Document.findByPk(documentId, {
                include: [{
                    model: DocumentChunk,
                    as: 'chunks'
                }]
            });

            return document;
        } catch (error) {
            throw new Error('Erro ao buscar chunks de documento: ' + error.message);
        }
    }
}
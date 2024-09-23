import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import DocumentChunk from './DocumentChunk.js';

class Document extends Model {}

Document.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    trainingContentId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_trainingcontent',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: true
    }
    
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Document',      // Nome do modelo
    tableName: 'tb_document', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

Document.hasMany(DocumentChunk, {
    foreignKey: 'documentId',
    as: 'chunks'
})

export default Document;

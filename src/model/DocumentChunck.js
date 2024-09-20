import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Document from './Document.js'

class DocumentChunck extends Model {}

DocumentChunck.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    documentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'tb_document',
            key: 'id'
        }
    },
    chunck_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data: {
        type: DataTypes.LONGBLOB,
        allowNull: false
    }
    
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'DocumentChunck',      // Nome do modelo
    tableName: 'tb_documentchunck', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

DocumentChunck.belongsTo(Document, {
    foreignKey: 'documentId',
    onDelete: 'CASCADE'
});


export default DocumentChunck;

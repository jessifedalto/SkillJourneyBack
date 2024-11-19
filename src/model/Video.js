import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import VideoChunk from './VideoChunk.js';

class Video extends Model {}

Video.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    trainingContentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'tb_trainingcontent',  // Nome da tabela de referência
            key: 'id'                     // Chave de referência na tabela 'tb_trainingcontent'
        }
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    videoHeaderId: {
        type: DataTypes.UUID,           // Define o tipo UUID para o VideoHeaderId
        allowNull: true,                // Permite que seja nulo (opcional)
        references: {
            model: 'tb_videochunk',     // Nome da tabela tb_videochunk
            key: 'id'                   // Chave de referência na tabela 'tb_videochunk'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,    // Define como a data atual por padrão
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true                 // Para suporte a soft delete (paranoid)
    }
}, {
    sequelize: sequelizeInstance,     // Passa a instância do Sequelize
    modelName: 'Video',               // Nome do modelo
    tableName: 'tb_video',            // Nome da tabela no banco de dados
    timestamps: true,                 // Adiciona `createdAt` e `updatedAt`
    paranoid: true                    // Adiciona `deletedAt` para soft deletes
});

// Relacionamento com VideoChunk
Video.hasMany(VideoChunk, {
    foreignKey: 'videoId',
    as: 'chunks' // Isso permite usar 'chunks' nas consultas
});

// Relacionamento com VideoChunk (VideoHeader)
Video.belongsTo(VideoChunk, {
    foreignKey: 'videoHeaderId',
    as: 'videoHeader' // Isso permite usar 'videoHeader' nas consultas
});

export default Video;

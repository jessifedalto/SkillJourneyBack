import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Video from './Video.js'

class VideoChunck extends Model {}

VideoChunck.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    videoId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'tb_video',
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
    modelName: 'VideoChunck',      // Nome do modelo
    tableName: 'tb_videochunck', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

VideoChunck.belongsTo(Video, {
    foreignKey: 'videoId',
    onDelete: 'CASCADE'
});

export default VideoChunck;

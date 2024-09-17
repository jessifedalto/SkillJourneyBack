import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db';

class Video extends Model {}

Video.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    trainingContentId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'TrainingContent',
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
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Video',      // Nome do modelo
    tableName: 'tb_video', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Video;
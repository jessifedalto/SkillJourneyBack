import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import TrainingContent from './TrainingContent.js';

class TrainingContentTag extends Model {}

TrainingContentTag.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    tagId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_tag',
            key: 'id'
        }
    },
    trainingContentId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_trainingcontent',
            key: 'id'
        }
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'TrainingContentTag',      // Nome do modelo
    tableName: 'tb_trainingcontenttag', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

TrainingContentTag.belongsTo(TrainingContent, {
    foreignKey: 'trainingContentId',
    onDelete: 'CASCADE'
});

export default TrainingContentTag;

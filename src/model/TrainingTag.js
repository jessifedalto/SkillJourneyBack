import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Training from './Training.js';

class TrainingTag extends Model {}

TrainingTag.init({
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
    trainingId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_training',
            key: 'id'
        }
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'TrainingTag',      // Nome do modelo
    tableName: 'tb_trainingtag', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

TrainingTag.belongsTo(Training, {
    foreignKey: 'trainingId',
    onDelete: 'CASCADE'
});

export default TrainingTag;

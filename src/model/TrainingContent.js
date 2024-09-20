import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Training from './Training.js';

class TrainingContent extends Model {}

TrainingContent.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    trainingId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_training',
            key: 'id'
        }
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'TrainingContent',      // Nome do modelo
    tableName: 'tb_trainingcontent', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});


TrainingContent.belongsTo(Training, {
    foreignKey: 'trainingId',
    onDelete: 'CASCADE'
});

export default TrainingContent;

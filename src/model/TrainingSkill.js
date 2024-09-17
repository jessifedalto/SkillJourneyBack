import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';

class TrainingSkill extends Model {}

TrainingSkill.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    skillId: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'Skill',
            key: 'id'
        }
    },
    trainingId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'Training',
            key: 'id'
        }
    },
    impact_level:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'TrainingSkill',      // Nome do modelo
    tableName: 'tb_trainingskill', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default TrainingSkill;

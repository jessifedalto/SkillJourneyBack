import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Skill from './Skill.js';

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
            model: 'tb_skill',
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
    },
    impact_level:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'TrainingSkill',      // Nome do modelo
    tableName: 'tb_trainingskill', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

TrainingSkill.belongsTo(Skill, {
    foreignKey: 'skillId',
    onDelete: 'RESTRICT'
});

export default TrainingSkill;

import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Training from './Training.js';

class EmployeeTraining extends Model {}

EmployeeTraining.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    employeeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_employee',
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
    finish_date:{
        type: DataTypes.DATE,
        allowNull: true
    },
    skill_updated:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'EmployeeTraining',      // Nome do modelo
    tableName: 'tb_employeetraining', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

EmployeeTraining.belongsTo(Training, {
    foreignKey: 'trainingId',
    onDelete: 'RESTRICT'
});

export default EmployeeTraining;

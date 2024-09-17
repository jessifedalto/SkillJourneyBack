import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';

class EmployeeSkill extends Model {}

EmployeeSkill.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    employeeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Employee',
            key: 'id'
        }
    },
    skillId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Skill',
            key: 'id'
        }
    },
    profeciency_level:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    development_plan:{
        type: DataTypes.STRING(500),
        allowNull: true
    }
}, {
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'EmployeeSkill',      // Nome do modelo
    tableName: 'tb_employeeskill', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default EmployeeSkill;

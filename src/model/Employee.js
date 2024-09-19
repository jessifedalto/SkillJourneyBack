import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';

class Employee extends Model {}

Employee.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    full_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hire_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    position:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    departmentId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'tb_department',
            key: 'id'
        }
    },
    edv:{
        type: DataTypes.STRING(8),
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Employee',      // Nome do modelo
    tableName: 'tb_employee', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Employee;

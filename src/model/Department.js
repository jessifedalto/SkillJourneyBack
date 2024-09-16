import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db';

class Department extends Model {}

Department.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    manager:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'Employee',
            key: 'id'
        }
    }
}, {
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Department',      // Nome do modelo
    tableName: 'tb_department', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Department;

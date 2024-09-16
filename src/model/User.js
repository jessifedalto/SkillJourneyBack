import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db';

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM(['ADM', 'MANAGER']),
        allowNull: false
    },
    EmployeeId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Employee',
            key: 'id'
        }
    }
}, {
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'User',      // Nome do modelo
    tableName: 'tb_user', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default User;

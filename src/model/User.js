import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import bcrypt from 'bcryptjs/dist/bcrypt.js';

class User extends Model {
    static async hashPassword(password) {
        const salt = await bcrypt.genSalt(12);
        return await bcrypt.hash(password, salt);
    }

    static async verifyPassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM(['ADM', 'MANAGER', 'EMPLOYEE']),
        allowNull: false
    },
    employeeId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'tb_employee',
            key: 'id'
        }
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'User',      // Nome do modelo
    tableName: 'tb_user', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default User;

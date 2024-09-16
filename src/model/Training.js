import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db';

class Training extends Model {}

Training.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    duration:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    due_date:{
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Training',      // Nome do modelo
    tableName: 'tb_training', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Training;

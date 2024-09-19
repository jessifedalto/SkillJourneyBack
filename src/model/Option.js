import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';

class Option extends Model {}

Option.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    questionId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'Question',
            key: 'id'
        }
    },
    text: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    is_right: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Option',      // Nome do modelo
    tableName: 'tb_option', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Option;

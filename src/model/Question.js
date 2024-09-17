import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';

class Question extends Model {}

Question.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    quizId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'Quiz',
            key: 'id'
        }
    },
    statement: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    difficulty_level: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Question',      // Nome do modelo
    tableName: 'tb_question', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Question;

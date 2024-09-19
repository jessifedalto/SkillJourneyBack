import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';

class Quiz extends Model {}

Quiz.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    trainingContentId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'TrainingContent',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Quiz',      // Nome do modelo
    tableName: 'tb_Quiz', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Quiz;

import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Training from './Training.js';

class Lesson extends Model {}

Lesson.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    trainingId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_training',
            key: 'id'
        }
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Lesson',      // Nome do modelo
    tableName: 'tb_lesson', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});


Lesson.belongsTo(Training, {
    foreignKey: 'trainingId',
    onDelete: 'CASCADE'
});

export default Lesson;

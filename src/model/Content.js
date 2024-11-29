import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db.js';
import Lesson from './Lesson.js';

class Content extends Model {}

Content.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    lessonId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'tb_lesson',
            key: 'id'
        }
    },
    text: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM(['TITLE', 'NORMAL', 'LIST']),
        allowNull: false
    }
    
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Content',      // Nome do modelo
    tableName: 'tb_content', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

Content.belongsTo(Lesson, {
    foreignKey: 'lessonId',
    onDelete: 'CASCADE'
});

export default Content;

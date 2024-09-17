import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../../startup/db';

class Skill extends Model {}

Skill.init({
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
        allowNull: true
    },
    type:{
        type: DataTypes.ENUM(['SOFT', 'HARD']),
        allowNull: false
    }
}, {
    sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Skill',      // Nome do modelo
    tableName: 'tb_skill', // Nome da tabela no banco de dados
    timestamps: true, // Adiciona `createdAt` e `updatedAt`
    paranoid: true // Adiciona `deletedAt` para suporte a soft deletes
});

export default Skill;

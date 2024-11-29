import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

function initializeDatabase() {
    const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    });

    sequelize.authenticate()
        .then(() => console.log(`Connected to ${process.env.DB_DATABASE}`))
        .catch(err => console.error('Unable to connect to the database:', err));

    sequelize.sync({ alter: true })  // Força a recriação das tabelas
    .then(() => {
        console.log('Tabelas sincronizadas!');
    })
    .catch((err) => {
        console.error('Erro ao sincronizar as tabelas:', err);
    });
    
    return sequelize;
}

const sequelizeInstance = initializeDatabase();
export default sequelizeInstance;
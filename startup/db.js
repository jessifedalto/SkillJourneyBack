import { Sequelize } from 'sequelize';
import config from 'config';


export default function initializeDatabase() {
    const dbConfig = config.get('db');

    const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
        host: dbConfig.host,
        dialect: 'mysql',
        logging: true
    });

    sequelize.authenticate()
        .then(() => console.log(`Connected to ${dbConfig.database}`))
        .catch(err => console.error('Unable to connect to the database:', err));

    return sequelize;
}
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('pitu', 'dev', '(@dev#)', {
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306
});

export default sequelize;
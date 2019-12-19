import sequelize from 'sequelize';

class Sequelize {
    constructor() {
        this.name = process.env.DB_DEV_NAME;
        this.user = process.env.DB_DEV_USERNAME;
        this.password = process.env.DB_DEV_PASSWORD;
    }
   static initializeDatabaseConnection = function () {
        return new Sequelize(
            this.name,
            this.user,
            this.password,
            {
                host: process.env.DB_DEV_HOST,
                port: 3306,
                dialect: 'mysql',
                logging: false,
                operatorsAliases: false,
                // timezone: config.timezone,
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000,
                },
                dialectOption: {
                    useUTC: true,
                },
            },
        );
    }
}
export default Sequelize;
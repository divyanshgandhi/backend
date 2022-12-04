const password = "Bad@tPa$$w0rds";

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: password,
    DB: "todo-app",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
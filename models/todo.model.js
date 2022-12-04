module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todo", {
        id:{
            type: Sequelize.INTEGER,
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN
        },
        list_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.UUID
        },
        created_at: {
            type: Sequelize.DATE
        },
        updated_at: {
            type: Sequelize.DATE
        }
    });

    return Todo;
}
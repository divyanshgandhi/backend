module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("list", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.INTEGER
        },
        todos: {
            type: Sequelize.ARRAY(Sequelize.INTEGER)
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

    return List;
}
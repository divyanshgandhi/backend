module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("list", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        todos: {
            type: Sequelize.ARRAY(Sequelize.INTEGER)
        },
        user_id: {
            type: Sequelize.UUID
        },
    });

    return List;
}
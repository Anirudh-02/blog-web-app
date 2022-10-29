const Sequelize = require('sequelize')

const db = new Sequelize('socialdb', 'socialuser', 'socialpass', {
    host: 'localhost',
    dialect: 'mysql'
})

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const COL_USERNNAME_DEF = {
    type: Sequelize.DataTypes.STRING(40),
    allowNull: false
}

const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(150),
    allowNull: false
}

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNNAME_DEF,
})

const Posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny'),
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)


module.exports = {
    db, Users, Posts, Comments
}
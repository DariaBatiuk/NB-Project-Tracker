const User = require('./User');
const Project = require('./Project');
const Projecttouser = require('./Projecttouser');

User.belongsToMany(Project, {
     through: Projecttouser,
     foreignKey: 'id_user'
});
Project.belongsToMany(User, {
     through: Projecttouser,
     foreignKey: 'id_project'
});

module.exports = { User, Project, Projecttouser };


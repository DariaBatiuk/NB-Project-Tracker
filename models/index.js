const User = require('./User');
const Project = require ('./Project');

User.hasMany(Project, {
	foreignKey: 'id_user',
});
Project.belongsTo(User, {
     foreignKey: 'id_project',
});

//Export your models so that it can be required in the server.js
// and/or routes files
module.exports = { User, Project };


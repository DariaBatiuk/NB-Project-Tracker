const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
class Projecttouser extends Model {}
Projecttouser.init({
     id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
     },
     id_project: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: {
               model: 'project',
               key: 'id_project'
               }
     },
     id_user: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: {
          model: 'user',
          key: 'id_user'
     }
     }
}, {
     sequelize,
     modelName: 'projecttouser',
     timestamps: false
});

module.exports = Projecttouser;
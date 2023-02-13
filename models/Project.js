const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Project extends Model {
     checkPassword(loginPw) {
          return bcrypt.compareSync(loginPw, this.password);
     }
}

Project.init(
     {
     id_project: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
     },
     title: {
          type: DataTypes.STRING,
          allowNull: false,
     },
     description: {
          type: DataTypes.STRING,
          allowNull: false,
     },
     skills: {
          type: DataTypes.STRING,
          allowNull: false,
     },
     },
     {
     hooks: {
          beforeCreate: async (newUserData) => {
               newUserData.password = await bcrypt.hash(newUserData.password, 10);
               return newUserData;
          },
     },
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'project',
     }
);

module.exports = Project;
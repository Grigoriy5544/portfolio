const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Skill = sequelize.define('skill', {
	name: { type: DataTypes.STRING, required: true, unique: true },
	img: { type: DataTypes.STRING, required: true },
})

const Project = sequelize.define('project', {
	name: { type: DataTypes.STRING, required: true, unique: true },
	img: { type: DataTypes.STRING, required: true },
	bigImg: { type: DataTypes.STRING, required: true },
})

const ProjectSkills = sequelize.define('projectSkills', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
})

Skill.belongsToMany(Project, { through: ProjectSkills })
Project.belongsToMany(Skill, { through: ProjectSkills })

module.exports = { Skill, Project, ProjectSkills }

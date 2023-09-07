const { Project, ProjectSkills, Skill } = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const { dataJson } = require('../utils/utils')

class ProjectsController {
	async getProjects(req, res) {
		const projects = await Project.findAll()

		return res.json(projects)
	}

	async getProject(req, res) {
		try {
			const id = req.params.id
			const project = dataJson(
				await Project.findOne({
					where: { id },
				})
			)

			if (!project)
				return res
					.status(404)
					.json({ message: 'Проекта с данным id не существует' })

			const skillsId = dataJson(
				await ProjectSkills.findAll({
					where: { projectId: id },
				})
			)

			const skills = await Promise.all(
				skillsId.map(async id => {
					id = Number(id.skillId)
					return await Skill.findOne({ where: { id } })
				})
			)

			if (skills?.length > 0) return res.json({ ...project, skills })

			return res.json({ ...project })
		} catch (e) {
			return res.json({ message: e })
		}
	}

	async addProjects(req, res) {
		try {
			const { name, skillsId } = req.body
			if (!name) return res.status(400).json({ message: 'invalid name' })
			if (!skillsId)
				return res.status(400).json({ message: 'invalid skillsId' })

			const img = req.files?.img
			const bigImg = req.files?.bigImg

			if (!img) return res.status(400).json({ message: 'invalid img' })
			if (!bigImg) return res.status(400).json({ message: 'invalid bigImg' })

			let imgFileName = uuid.v4() + '.' + img.name.split('.')[1]
			let bigImgFileName = uuid.v4() + '.' + bigImg.name.split('.')[1]

			const project = await Project.create({
				name,
				img: imgFileName,
				bigImg: bigImgFileName,
			})
			img.mv(path.resolve(__dirname, '..', 'public', imgFileName))
			bigImg.mv(path.resolve(__dirname, '..', 'public', bigImgFileName))

			skillsId.forEach(async id => {
				await ProjectSkills.create({ projectId: project.id, skillId: id })
			})

			return res.json(project)
		} catch (e) {
			console.log(e)
			return res.status(400).send({ message: e.message })
		}
	}
}

module.exports = new ProjectsController()

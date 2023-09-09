const { Skill } = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class SkillsController {
	async getSkills(req, res) {
		const data = await Skill.findAll()
		return res.json(data)
	}

	async addSkills(req, res) {
		try {
			const { name } = req.body
			if (!name) return res.status(400).json({ message: 'invalid name' })

			const img = req.files?.img

			if (!img) return res.status(400).json({ message: 'invalid img' })

			let fileName = uuid.v4() + '.' + img.name.split('.')[1]

			const skill = await Skill.create({
				name,
				img: fileName,
			})
			const resPath = path.resolve(__dirname, '..', 'public', fileName)
			img.mv(resPath)
			return res.json({ ...skill, resPath })
		} catch (e) {
			console.log(e)
			return res.status(400).send({ message: e.message })
		}
	}
}

module.exports = new SkillsController()

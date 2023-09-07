const Router = require('express').Router
const skillsController = require('../controller/skillsController')
const projectsController = require('../controller/projectsController')

const router = new Router()

router.get('/skills', skillsController.getSkills)
router.post('/skills', skillsController.addSkills)
router.get('/projects', projectsController.getProjects)
router.get('/projects/:id', projectsController.getProject)
router.post('/projects', projectsController.addProjects)

module.exports = router

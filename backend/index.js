require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const router = require('./router/index')
const fileUpload = require('express-fileupload')

const app = express()
app.use(
	cors({
		origin: '*',
	})
)
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(fileUpload({}))
app.use('/api', router)

app.get('/', (req, res) => res.send('Hello'))

const PORT = process.env.PORT || 5000

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log('server started on port =', PORT))
	} catch (e) {
		console.log(e)
	}
}

start()

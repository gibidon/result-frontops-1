const express = require('express')
const {default:fetch} = require('node-fetch')

const app = express()

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || 'http://localhost:3005'

app.get('/',(req,res) => {
	// fetch('http://localhost:3005')
	// fetch('http://date:3005')
	fetch(DATE_SERVER_HOST)
		.then(res => res.json())
		.then(data => res.send(`Hello, current date is ${data}\n`))
}
)

app.listen(3000,() => {
	console.log('ready')
})

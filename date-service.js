const express = require('express')

const app = express()

app.get('/',(req,res) => {
	res.send(new Date())
}
)

app.listen(3005,() => {
	console.log('ready on posrt 3005')
})

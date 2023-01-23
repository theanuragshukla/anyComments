const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const http = require('http').Server(app)

app.use('/static',express.static(__dirname + "/static"))
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.get("/", (req, res)=>{
	res.sendFile(__dirname+'/index.html')
})

http.listen(port, ()=>{
	console.log(`running on port ${port}`)
})

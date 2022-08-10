const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Ola from express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







// var http = require("http");
// http.createServer(function(req,res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Aloha world');
// }).listen(process.env.PORT || 3000);

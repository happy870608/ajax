const express = require('express')
const app = express()

const port = 50505

app.get('/step1', (req, res) => {
    // response browser
  //   // 回應瀏覽器
     res.send('hello world')
       })
  //
  //     // start the server
  //     // 啟動伺服器
       app.listen(port, () => {
         console.log(`listening on port: ${port}`)
         })
app.get('/step5', (req, res) => {
      res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`)
})
app.use(express.static(`${__dirname}/dist`))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/step7', (req, res) => {
   res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})

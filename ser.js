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
app.use(express.static(`${__dirname}/dist`))
let nRequests = 0
app.get('/step5', (req, res) => {
    res.send(`Hello, ${req.query.fName} ${req.query.lName}`)
})

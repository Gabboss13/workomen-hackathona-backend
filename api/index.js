const express = require ('express')
const routes = require ('./routes')
const port = 8000

const app = express ()

routes(app)

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.listen(port, ()=> console.log(`server running on port ${port}`))

module.exports = app
const express = require ('express')
const routes = require ('./routes')
const port = process.env.PORT

const app = express ()

routes(app)


app.listen(port, ()=> console.log(`server running on port ${port}`))

module.exports = app
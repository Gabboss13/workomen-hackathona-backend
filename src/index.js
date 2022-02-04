const express = require ('express');
const routes = require ('./routes');
const port = process.env.PORT || 8000
const cors = require('cors')
const app = express ()

app.use(cors());
routes(app);


app.listen(port, ()=> console.log(`server running on http://localhost:${port}`));

module.exports = app
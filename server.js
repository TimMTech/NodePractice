const express = require ('express')
const router = require('./router')

const app = express()
const PORT = process.env.PORT || "3000";


app.use('/', router)


app.listen(PORT, () => console.log(`Server Listening To ${PORT}`));

const express = require('express')
const app = express()
const path = require('path')

const mainRouter = require('./routes/index')
const productRouter = require('./routes/products')
const PORT = process.env.PORT || 3000


app.set('view engine', 'ejs')

app.use(mainRouter)
app.use(productRouter)

app.listen(PORT,()=>{
    console.log(`listening on port http://localhost:${PORT}`)
})
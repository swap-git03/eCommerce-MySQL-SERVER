const express = require('express')
const categoryRoute = require('./routes/categoryRoute')
const brandRoute = require('./routes/brandRoute')
const productRoute = require('./routes/productRoute')
const cors = require('cors')

const app = express()
const port = 7000


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))


app.use('/category', categoryRoute)
app.use('/brand', brandRoute)
app.use('/products', productRoute)





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
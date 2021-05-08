require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const clientRouter = require('./routes/client')
const sellerRouter = require('./routes/seller')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/order')
const paymentRouter = require('./routes/payment')

const port = process.env.PORT || 8000
const app = express()
sequelize.sync({force: true})

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/clients', clientRouter)
app.use('/sellers', sellerRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)
app.use('/payments', paymentRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});

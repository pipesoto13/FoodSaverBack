require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/order')
const paymentRouter = require('./routes/payment')

const port = process.env.PORT || 8000
const app = express()
sequelize.sync()

app.use(express.json())
app.use(cors({origin: '*'}))
app.use(morgan('dev'))

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)
app.use('/payments', paymentRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});

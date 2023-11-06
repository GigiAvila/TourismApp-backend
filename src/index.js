require('dotenv').config()
const express = require('express')
const app = express()
require('./Config/db')
const cors = require('cors')
const { rateLimit } = require('express-rate-limit')
const { setError } = require('./config/error')
const seedFunctions = require('./Config/seed')
seedFunctions()

// CORS
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true)
    }
  })
)

// LIMITER
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 100,
  standardHeaders: false,
  legacyHeaders: false
})
app.use(limiter)

//  MIDDLEWARES DE BODY PARSER
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }))

//Router
const mainRouter = require('./Routes/indexRouter')
app.use('/api', mainRouter)

// Controlador de errores
app.use('*', (req, res, next) => {
  return next(setError(404, 'Not Found'))
})

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Internal Server Error')
})

const PORT = 4001
app.listen(PORT, () => {
  console.log(
    `La aplicación está corriendo en el puerto http://localhost:${PORT}`
  )
})

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.disable('x-powered-by')

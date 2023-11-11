require('dotenv').config()
const express = require('express')
const app = express()
require('./src/Config/db')
const cors = require('cors')
const { rateLimit } = require('express-rate-limit')
const cloudinary = require('cloudinary').v2
const { setError } = require('./src/config/error')
const seedFunctions = require('./src/Config/seed')
seedFunctions()

//CLOUDINARY
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

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
  windowMs: 3 * 60 * 1000,
  limit: 50,
  standardHeaders: false,
  legacyHeaders: false
})
app.use(limiter)

//  MIDDLEWARES DE BODY PARSER
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }))

//Router
const mainRouter = require('./src/Routes/indexRouter')
app.use('/api', mainRouter)

// ERRORS
app.use('*', (req, res, next) => {
  return next(setError(404, 'Not Found'))
})

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Internal Server Error')
})

// LOCAL - PORT - CONFIG
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

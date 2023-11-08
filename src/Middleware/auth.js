const { verifyJwt } = require('../Config/jwt')
const { setError } = require('../config/error')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return next(setError(400, 'You are not authorized to access here'))
    }

    const parsedToken = token.replace('Bearer ', '')
    const validToken = verifyJwt(parsedToken)
    const userLogued = await User.findById(validToken.id)

    userLogued.password = null
    req.user = userLogued
    next()
  } catch (err) {
    return next(setError(400, 'Wrong authorization'))
  }
}

module.exports = { isAuth }

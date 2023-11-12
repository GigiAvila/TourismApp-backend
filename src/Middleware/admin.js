const { verifyJwt } = require('../config/jwt')
const { setError } = require('../config/error')
const User = require('../Model/user')

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return next(setError(400, 'You have to introduce your token'))
    }

    const parsedToken = token.replace('Bearer ', '')
    const validToken = verifyJwt(parsedToken)
    const user = await User.findById(validToken.id)

    if (user.type !== 'admin') {
      return next(setError(401, 'Unauthorized. Only admins allowed.'))
    }

    user.password = null
    req.user = user
    next()
  } catch (err) {
    return next(setError(400, 'Wrong authorization'))
  }
}

module.exports = { isAdmin }

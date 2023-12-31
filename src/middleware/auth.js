const { verifyJwt } = require('../config/jwt')
const { setError } = require('../config/error')
const User = require('../model/user')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return next(setError(400, 'You have to introduce your token'))
    }

    const parsedToken = token.replace('Bearer ', '')
    const validToken = verifyJwt(parsedToken)
    const userLogued = await User.findById(validToken.id)

    if (!userLogued) {
      return next(setError(404, 'User not found'))
    }

    if (
      !(
        userLogued.type === 'admin' ||
        (userLogued.type === 'user' &&
          userLogued._id.toString() === req.params.id)
      )
    ) {
      return next(
        setError(
          401,
          'Unauthorized. Only admins or the user itself are allowed.'
        )
      )
    }

    userLogued.password = null
    req.user = userLogued
    next()
  } catch (err) {
    console.error(err)
    return next(setError(400, 'Wrong authorization'))
  }
}

module.exports = { isAuth }

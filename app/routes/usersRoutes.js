const express = require('express')

const usersRoutes = (usersModel) => {
  const usersRouter = express.Router()
  // calling the usersCtrl with the usersModel
  const usersCtrl = require('../controllers/userCtrl')(usersModel)

  // the routes on /api/users
  usersRouter.route('/')
    .get(usersCtrl.get)
    .post(usersCtrl.post)

  return usersRouter
}

module.exports = usersRoutes

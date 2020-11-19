const route = require("express").Router()
const Controller = require("../controllers/controllers")

route.get('/', Controller.mainPage)

route.get('/listBooks', Controller.listBooks)

route.get('/register', Controller.registerForm)
route.post('/register', Controller.addUser)

route.get('/showuser', Controller.showUser)

route.get('/login', Controller.logInForm)
route.post('/login', Controller.checkLogin)

module.exports = route
const route = require("express").Router()
const Controller = require("../controllers/controllers")

route.get('/listBooks', Controller.listBooks)

module.exports = route
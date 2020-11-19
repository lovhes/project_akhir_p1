const route = require("express").Router()
const Controller = require("../controllers/controllers")

route.get('/listBooks', Controller.listBooks)
route.get('/Profile', Controller.profile)
route.get('/listBookReview', Controller.listBookReview)
route.get('/addReview/:id', Controller.getAddReview)
route.post('/addReview/:id', Controller.postAddReview)
module.exports = route
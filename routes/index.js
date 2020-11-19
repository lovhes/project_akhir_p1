const route = require("express").Router()
const Controller = require("../controllers/controllers")

const isLoggedIn = function (req, res, next) { //check for log in
  if(req.session.userId) {
    next()
  } else {
    res.redirect("/login")
  }
}

const noDoubleLogin = function (req, res, next) { //check to prevent registering or relogging in while logged in
  if(req.session.userId) {
    res.redirect("/")
  } else {
    next()
  }
}


route.get('/', Controller.mainPage)



route.get('/register',noDoubleLogin,  Controller.registerForm)
route.post('/register',noDoubleLogin, Controller.addUser)

route.get('/login',noDoubleLogin, Controller.logInForm)
route.post('/login',noDoubleLogin, Controller.checkLogin)

route.use(isLoggedIn); // every route below need you to be logged in
route.get('/listBooks', Controller.listBooks)

route.get('/showuser', Controller.showUser)
route.get('/delete/:id', Controller.deleteDataById)
route.get('/edit/:id', Controller.editDataById)
route.post("/edit/:id", Controller.editDataUser)


route.get('/logout', Controller.doLogout)


route.get('/Profile', Controller.profile)


route.get('/listBookReview', Controller.listBookReview)
route.get('/addReview/:id', Controller.getAddReview)
route.post('/addReview/:id', Controller.postAddReview)


module.exports = route
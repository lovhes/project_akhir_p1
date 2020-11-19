const {Book, User, Sequelize} = require("../models/index")
const { hashCheck } = require('../helper/password')
const {or} = Sequelize.Op;


class Controller{
    
    static mainPage(req, res){
        // console.log(req.session)
        res.render("mainPage")
    }

    static listBooks(req, res){
        Book.findAll()
        .then(data=>{
            res.render("listBooks", {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    

    static registerForm(req, res){
        res.render('registerForm')
    }

    static addUser(req,res) {
        
        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }

        User.create(newUser)
        .then(_ => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
        

    }

    static logInForm(req, res){
        res.render("logInForm")
    }

    static checkLogin(req,res){
        const key = req.body.usernameOrEmail;
        const password = req.body.password;

        User.findOne({
            where: {
                [or]: [{username: key},{email: key}]
            }
        })
        .then(user => {
            if(user && hashCheck(password, user.password)) {
                req.session.userId = user.id;
                // res.send(`welcome ${user.first_name} ${user.last_name}`)
                res.redirect('/')
            }
            else{
                res.send(`wrong username or password`)
            }
        })
        .catch(err => {
            res.send('something went error')
        })
        
    }


    static showUser(req,res) {
        // Cast.findAll()
        //     .then(data => {
        //         res.render("showUsers")
        //     })
        //     .catch(err => {
        //         res.send(err)
        //     })
        res.render('showUsers')
    }

    static doLogout(req, res) {
        req.session.destroy(function(err) {
            if(err) {
                res.send('you got error')
            } else {
                res.redirect('/')
            }
          })
        .catch(e=>{
            res.send(e)
        })
    }
    static profile(req, res){
        User.findAll()
        .then(data=>{
            res.render("userProfile", {data})
        })
        .catch(e=>{
            res.send(e)
        })
    }
    static listBookReview(req, res){
        Book.findAll()
        .then(data=>{
            res.render("listBookReview", {data})
            // res.send(data)
        })
        .catch(e=>{
            res.send(e)
        })
    }
    static getAddReview(req, res){
        let id = req.params.id
        let error = null
        if(req.query.error){
            error = req.query.error
        }
        Book.findByPk(id, {
            include: User
        })
        .then(data=>{
            res.render("review", {data, error})
            // res.send(data)
        })
        .catch(e=>{
            res.send(e)
        })
    }
    // static getAddMovieCast(req, res){
    //     let id = req.params.id
    //     let error = null
    //     if (req.query.error) {
    //         error = req.query.error
    //     }
    //     let founded
    //     Movie.findByPk(id, {
    //         include: [Cast]
    //     })
    //     .then(data=>{
    //         founded = data
    //         return Cast.findAll({
    //             include: [Movie]
    //         })
    //     })
    //     .then(data=>{
    //         res.render("movieAddCast", {data, founded, error})
    //         // console.log(data)
    //         // res.send(founded)
    //     })
    //     .catch(e=>{
    //         res.send(e)
    //     })
    // }
    static postAddReview(req, res){
        // console.log(req.body)
        let id = req.params.id
        let dataUser
        User.findAll()
        .then(data=>{
            dataUser = data
            let obj = {
                rating: req.body.rating,
                review: req.body.review,
                BookId: id,
                UserId: dataUser[0].id
            }
            // console.log(obj)
            return Review.create(obj)
        })
        .then(data=>{
            res.redirect(`/addReview/${id}`)
        })
        .catch(e=>{
            res.redirect(`/addReview/${id}?error=${e.message}`)
            // res.send(e)
        })
    }
}

module.exports = Controller
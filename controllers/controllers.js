const {Book, User, Sequelize} = require("../models/index")
const { hashCheck } = require('../helper/password')
const {or} = Sequelize.Op;

class Controller{
    static listBooks(req, res){
        Book.findAll()
        .then(data=>{
            res.render("listBooks", {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static mainPage(req, res){
        
        res.render("mainPage")
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
                res.send(`welcome ${user.first_name} ${user.last_name}`)
                // res.send('correct')
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
}

module.exports = Controller
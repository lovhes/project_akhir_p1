const {Book, User} = require("../models/index")


class Controller{
    static listBooks(req, res){
        Book.findAll()
        .then(data=>{
            // res.send(data)
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
            res.redirect('/login')
        })
        .catch(err => {
            res.send(err)
        })
        

    }

    static logInForm(req, res){
        res.render("logInForm")
    }

    static checkLogin(req,res){
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        res.send()
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
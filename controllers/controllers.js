const {Book, User, Review} = require("../models/index")
class Controller{
    static listBooks(req, res){
        Book.findAll()
        .then(data=>{
            res.render("listBooks", {data})
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
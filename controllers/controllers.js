const {Book} = require("../models/index")
class Controller{
    static listBooks(req, res){
        Book.findAll()
        .then(data=>{
            res.render("listBooks", {data})
        })
    }
}

module.exports = Controller
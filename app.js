const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')
const routes = require("./routes")




app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.use(session({
  secret: 'book review',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginVerify = require('./login_verify')
const port = 3000

// setting layouts engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting bodyparser to receive the data of POST
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
    res.render('login')
})

app.post('/', (req, res)=> {
    let userInput = req.body
    let trueUser = loginVerify(userInput)
    // 判斷是否有比對出資料，依據結果給出不同的頁面
    if (!(trueUser === undefined) ) {
        let name = trueUser.firstName
        res.render('welcome',{name: name})
    } else{
        let loginError = 'Username/Password 錯誤'
        res.render('login', {loginError: loginError})
    }
})

// listen and start the server
app.listen(port, () => {
    console.log(`http://localhost:${port} is starting!!`)
})
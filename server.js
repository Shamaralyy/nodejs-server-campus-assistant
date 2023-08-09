const express = require('express');
const session = require('express-session');
const useRouter = require('./router')

const app = express();

app.use(session({
    secret: 'assistant',
    resave: false,
    saveUninitialized: true
}))

app.use(express.urlencoded({extended: false}))

app.use(useRouter)

app.listen(8080,() => {
    console.log('server is running at http://localhost:8080');
})
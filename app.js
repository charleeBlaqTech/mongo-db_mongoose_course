const express=require('express');
const dbConnection = require('./db/dbConnect')
const exphbs=require('express-handlebars');
const dotenv=require('dotenv');
dotenv.config()
const postRoutes= require('./routes/postRoutes')
const homeRoutes= require('./routes/homeRoutes')

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.engine('hbs',exphbs.engine({
    extname: '.hbs', defaultLayout: 'main', runtimeOptions: {
        allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true
    }
}))
app.set('view engine', 'hbs');

//class examples using crud methods........

app.use('/', homeRoutes)
app.use('/post', postRoutes);






app.listen(process.env.PORT, ()=>{
    dbConnection()
    console.log('listining to PORT')
})
const mongoose=require('mongoose')

function dbConnection(){
    mongoose.connect(process.env.MONGODB_CONNECT).then(()=>{
        console.log('DB CONNECTED SUCCESSFULLY')
    }).catch((err)=>{
        console.log('error')
    })
}


module.exports = dbConnection;
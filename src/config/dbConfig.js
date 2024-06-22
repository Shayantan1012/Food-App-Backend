const dotenv=require('dotenv');
dotenv.config();
const  mongoose = require('mongoose');
const ServerConfig = require('./serverConfig');

async function connectDB(){
    try{
        await mongoose.connect(ServerConfig.DB_URL);
console.log("Successfully connect to Database!!!!");
    }catch(error){
        console.log("Sorry not connect to Database!!!!");
        console.log(error);
    }
}
module.exports=connectDB;

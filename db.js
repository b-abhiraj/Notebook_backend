import mongoose from 'mongoose'

import * as dotenv from 'dotenv' 
dotenv.config()

const connect_to_mongo=()=>{
    mongoose.connect(process.env.MONGO_URL)
    console.log("database connected!!"); 
}

export default connect_to_mongo;
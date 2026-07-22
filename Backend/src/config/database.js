const mongoose = require("mongoose")

async function connectToDB() {
    
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Databases")
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectToDB
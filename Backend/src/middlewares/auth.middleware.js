const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../model/blacklist.model")

async function authUser(req , res , next) {

    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.startsWith("Bearer ") 
        ? authHeader.split(" ")[1] 
        : null

    if(!token){
        return  res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({
        token
    })

    if(isTokenBlacklisted) {
        return res.status(401).json({
            message: "token is invalid."
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}


module.exports = {authUser}

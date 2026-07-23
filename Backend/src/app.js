const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://resume-analyzer-gen-ai-project.vercel.app",
        "https://resume-analyzer-gen-ai-project-w68d.vercel.app"
    ],
    credentials: true
}))

/*require all the routes here*/ 
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

/*require all the routes here*/
app.use("/api/auth" , authRouter)
app.use("/api/interview" , interviewRouter)

module.exports = app
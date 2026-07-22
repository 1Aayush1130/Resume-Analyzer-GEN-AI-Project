const mongoose = require('mongoose');

/**
 * - job description schema
 * - resume text
 * - self description
 * 
 * - score: Number
 * 
 * - technical questions : [{
 *                 question: "",
 *                 answer: "",
 *                 intention: ""
 *            }]
 * - behavioral questions : [{
 *                 question: "",
 *                 answer: "",
 *                 intention: ""
 *            }]
 * - skill gap : [{
 *             skill: "",
 *             severity: {
 *             type: String,
 *             enum: ["low" , "medium", "high"]  
 *              }  
 *            }]
 * - preparation plan: [{
 *              day: Number,
 *              focus: String,
 *              tasks: [String]   
 *            }]
 */

const technicalQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true , "Technicl question is required"] 
    }, 
    intention: {
        type: String,
        required: [ true , "Intention is required"]
    },
     answer: {
        type: String,
        required: [true , "Answer is required"]
    }
}, {
    _id: false
})

const behavioralQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true , "Technicl question is required"] 
    }, 
    intention: {
        type: String,
        required: [ true , "Intention is required"]
    },
     answer: {
        type: String,
        required: [true , "Answer is required"]
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true , "Skill is required"]
    },
    severity: {
        type: String,
        enum: ["low" , "medium" , "high"],
        required: [true , "Severity is required"]
    }
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true , "Day is requuired"]
    }, 
    focus: {
        type: String,
        required: [true , "Focus is required"]
    }, 
    tasks: [{
        type: String,
        required: [true , "Tasks is required"]
    }]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription:  {
        type: String,
        required: [true , "Jbo description is required"]
    },
    resume: {
        type: String,
    }, 
    selfDescription: {
        type: String,
    }, 
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [ technicalQuestionsSchema ],
    behavioralQuestions: [ behavioralQuestionsSchema ],
    skillGaps: [ skillGapSchema ],
    preparationPlan: [ preparationPlanSchema ],
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title: {
        type: String,
        required: [true , "Title is required"]
    }
} , {
    timestamps: true
})

const interviewReportModel = mongoose.model("InterviewReport" , interviewReportSchema);

module.exports = interviewReportModel
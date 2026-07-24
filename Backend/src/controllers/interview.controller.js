const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../model/interviewReport.model")
const generateResumePdf = require("../services/pdf.service")

/**
 * @description Controller to generate interview report based on user self description, resume and job description.
 */

async function generateInterViewReportContoller(req , res) {

    const resumeContent = await new pdfParse.PDFParse(Uint8Array.from(req.file.buffer)).getText()
    const { selfDescription , jobDescription } = req.body

    const interViewReportByAi = await generateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    console.log("AI Response:", JSON.stringify(interViewReportByAi, null, 2))


    const interviewReport = await interviewReportModel.create({
        user:req.user.id ,
        resume:resumeContent.text ,
        selfDescription,
        jobDescription ,
        ...interViewReportByAi
    })

    res.status(201).json({
        message:"Interview report generated successfully.",
        interviewReport
    })
}

/**
 * @description Controller to get interview report by ID    
 */

async function getInterviewReportByIdController(req , res) {

    const { interviewId } = req.params

    const interviewReport = await interviewReportModel.findOne( { _id: interviewId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({ message: "Interview report not found." })
    }

    res.status(200).json({ 
        message: "Interview report fetched successfully.",
        interviewReport
     })
}

/**
 * @description Controller to get all interview reports of logged in user.
 */

async function getAllInterviewReportsController(req , res) {
    const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")
    res.status(200).json({ 
        message: "Interview reports fetched successfully.",
        interviewReports
     })
}

/**
 * @description Controller to generate a resume PDF based on interview report data.
 */
async function generateResumePdfController(req, res) {

    const { interviewReportId } = req.params

    const interviewReport = await interviewReportModel.findOne({ _id: interviewReportId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({ message: "Interview report not found." })
    }

    const pdfBuffer = await generateResumePdf(interviewReport)

    res.setHeader("Content-Type", "application/pdf")
    res.setHeader("Content-Disposition", `attachment; filename="resume-${interviewReportId}.pdf"`)
    res.send(pdfBuffer)
}

module.exports = {generateInterViewReportContoller, getInterviewReportByIdController, getAllInterviewReportsController, generateResumePdfController}
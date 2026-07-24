const PDFDocument = require("pdfkit")

/**
 * @description Generates a PDF buffer from an interview report using pdfkit.
 */
function generateResumePdf(interviewReport) {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({ margin: 50 })
            const buffers = []

            doc.on("data", (chunk) => buffers.push(chunk))
            doc.on("end", () => resolve(Buffer.concat(buffers)))
            doc.on("error", reject)

            doc.fontSize(22).fillColor("#e91e63").text(interviewReport.title || "Interview Preparation Report", { underline: true })
            doc.moveDown()

            doc.fontSize(14).fillColor("#000").text("Job Description", { underline: true })
            doc.fontSize(11).fillColor("#333").text(interviewReport.jobDescription || "N/A")
            doc.moveDown()

            doc.fontSize(14).fillColor("#000").text("Match Score", { underline: true })
            doc.fontSize(11).fillColor("#333").text(`${interviewReport.matchScore}%`)
            doc.moveDown()

            doc.fontSize(14).fillColor("#000").text("Resume / Self Description", { underline: true })
            doc.fontSize(11).fillColor("#333").text(interviewReport.resume || interviewReport.selfDescription || "N/A")

            doc.end()
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = generateResumePdf
const puppeteer = require("puppeteer")

/**
 * @description Generates a PDF buffer from an interview report using Puppeteer.
 */
async function generateResumePdf(interviewReport) {

    const html = `
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; color: #1a1a1a; }
                h1 { color: #e91e63; border-bottom: 2px solid #e91e63; padding-bottom: 10px; }
                h2 { margin-top: 25px; color: #333; }
                .section { margin-bottom: 20px; }
                .job-desc, .self-desc { white-space: pre-wrap; line-height: 1.6; }
            </style>
        </head>
        <body>
            <h1>${interviewReport.title || "Interview Preparation Report"}</h1>

            <div class="section">
                <h2>Job Description</h2>
                <p class="job-desc">${interviewReport.jobDescription || "N/A"}</p>
            </div>

            <div class="section">
                <h2>Match Score</h2>
                <p>${interviewReport.matchScore}%</p>
            </div>

            <div class="section">
                <h2>Resume / Self Description</h2>
                <p class="self-desc">${interviewReport.resume || interviewReport.selfDescription || "N/A"}</p>
            </div>
        </body>
        </html>
    `

    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    })

    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true })

    await browser.close()

    return pdfBuffer
}

module.exports = generateResumePdf
const {GoogleGenAI, Type} = require("@google/genai")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

const questionItemSchema = {
    type: Type.OBJECT,
    properties: {
        question: { type: Type.STRING },
        intention: { type: Type.STRING },
        answer: { type: Type.STRING }
    },
    required: ["question", "intention", "answer"]
}

const interviewReportSchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING },
        matchScore: { type: Type.NUMBER },
        technicalQuestions: {
            type: Type.ARRAY,
            items: questionItemSchema
        },
        behavioralQuestions: {
            type: Type.ARRAY,
            items: questionItemSchema
        },
        skillGaps: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    skill: { type: Type.STRING },
                    severity: {
                        type: Type.STRING,
                        enum: ["low", "medium", "high"]
                    }
                },
                required: ["skill", "severity"]
            }
        },
        preparationPlan: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    day: { type: Type.NUMBER },
                    focus: { type: Type.STRING },
                    tasks: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                    }
                },
                required: ["day", "focus", "tasks"]
            }
        }
    },
    required: ["title", "matchScore", "technicalQuestions", "behavioralQuestions", "skillGaps", "preparationPlan"]
}

async function generateInterviewReport({resume, selfDescription, jobDescription}){ 

    const prompt = `Generate an interview report for a candidate with the following details:
                   Resume: ${resume}
                   Self Description: ${selfDescription}
                   Job Description: ${jobDescription}

                   Strictly return data matching the required JSON schema with fields: title, matchScore, technicalQuestions, behavioralQuestions, skillGaps, preparationPlan.
                   The title should be a short descriptive name for this interview prep report, e.g. "Frontend Engineer at Google – Interview Prep".`

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config:{
            responseMimeType:"application/json",
            responseSchema: interviewReportSchema
        }
    })

    console.log("RAW RESPONSE TEXT:", response.text)

    return JSON.parse(response.text)
}

module.exports = generateInterviewReport
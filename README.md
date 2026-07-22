# 🚀 AI-Powered Interview Preparation & Resume Analyzer

An AI-powered full-stack web application that helps users optimize their resumes, identify skill gaps, and prepare for interviews using Generative AI. The platform analyzes resumes against job descriptions, generates ATS-friendly resumes, and creates personalized interview questions to improve job readiness.

---

## ✨ Features

- 📄 Upload and analyze resumes
- 🤖 AI-powered resume analysis using Gemini API
- 🎯 Skill gap identification based on Job Description
- 💼 ATS-friendly resume generation
- 🎤 AI-generated interview questions
- 🔐 Secure JWT Authentication
- 🚫 Token Blacklisting for secure logout
- 📑 Dynamic PDF resume generation using Puppeteer
- 📱 Responsive and modern UI
- ⚡ Fast and scalable MERN architecture

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- SCSS / CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

### AI & Tools
- Google Gemini API
- Puppeteer
- Multer
- PDF Generation

---

## 📂 Project Structure

```
Resume-Analyzer-GEN-AI-Project
│
├── Backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/1Aayush1130/Resume-Analyzer-GEN-AI-Project.git
```

```
cd Resume-Analyzer-GEN-AI-Project
```

---

### Backend Setup

```
cd Backend
npm install
```

Create a `.env` file inside the Backend folder.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Run backend

```
npm start
```

---

### Frontend Setup

```
cd Frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

| Variable | Description |
|-----------|-------------|
| PORT | Backend Port |
| MONGO_URI | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key |
| GEMINI_API_KEY | Google Gemini API Key |

---

## 📸 Screenshots

Add your project screenshots here.

### Home Page

<img src="screenshots/home.png" width="100%">

### Resume Analysis

<img src="screenshots/resume-analysis.png" width="100%">

### Interview Preparation

<img src="screenshots/interview.png" width="100%">

---

## 🚀 Future Improvements

- Voice-based mock interviews
- AI Interview Scoring
- Resume Version History
- Multiple Resume Templates
- Company-specific Interview Questions
- Real-time Coding Interview Module

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```
git checkout -b feature-name
```

3. Commit changes

```
git commit -m "Added new feature"
```

4. Push changes

```
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

**Aayush Singh Rathore**

- GitHub: https://github.com/1Aayush1130

---

⭐ If you found this project useful, don't forget to **Star** the repository.

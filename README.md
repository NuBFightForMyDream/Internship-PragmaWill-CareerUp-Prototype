# CareerUp: AI Job Match & CV Assistant 🚀

![CareerUp Prototype](https://img.shields.io/badge/Status-Prototype-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.2-black)
![React](https://img.shields.io/badge/React-18.x-blue)

**CareerUp** is a personalized AI-powered job matching and career guidance dashboard. This repository contains the front-end mockup and prototype developed for the **Pragma & Will Case Evaluation** by **Chatrphol**.

The system is designed to take the guesswork out of job hunting by using AI semantic search and large language models to perfectly align your CV with industry demands.

## ✨ Core Features (Prototype)

*   **📊 Personalized Dashboard**: A central hub to upload your CV and view overall profile strength.
*   **🎯 Semantic Job Matches**: Uses simulated pgvector logic to find jobs that *semantically* match your experience (beyond just keyword matching). It explains *why* you matched.
*   **📄 AI CV Insights**: An automated ATS score and line-by-line CV analysis that flags missing keywords and suggests quantitative improvements to your bullet points.
*   **🎙️ Virtual Mock Interview**: A live simulated interface where an AI Recruiter (GPT-4) conducts real-time mock interviews based on your resume and targeted job.

## 🛠️ Planned Technology Stack

This mockup represents the Front-End layer. The complete planned system architecture includes:

### Front-End (This Repository)
*   **Framework**: Next.js (App Router) & React
*   **Styling**: Vanilla CSS (Premium Dark Mode & Glassmorphism)
*   **Icons**: Lucide React

### Back-End & AI (Architecture Design)
*   **API & Logic**: FastAPI (Python) or Node.js
*   **Database & Auth**: Supabase (PostgreSQL)
*   **Vector Search**: pgvector (for semantic CV-to-Job matching)
*   **AI Models**: OpenAI API (GPT-4o / Embeddings) & Gemini 3 Pro
*   **Job Data**: Adzuna API / Google Jobs (via SerpAPI)
*   **Automation**: n8n (for alerts, webhooks, and email triggers)

## 🚀 Getting Started

To run this Next.js prototype locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) and npm installed.

### 2. Installation
Navigate to the project directory and install the required dependencies:

```bash
# Clone the repository and navigate into the app
cd mockup-app

# Install dependencies
npm install
```

### 3. Run the Development Server
Start the local Next.js server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The dashboard is fully responsive and interactive!

## 💡 System Walkthrough

1.  **Onboarding**: The user lands on the Dashboard and uploads their latest CV.
2.  **AI Ingestion**: The system (conceptually) converts the CV text into vector embeddings via OpenAI and stores them in Supabase/pgvector.
3.  **Matching**: Real-time jobs from Adzuna are matched against the user's vector profile.
4.  **Optimization**: The user clicks on **CV Insights** to get tailored advice on how to tweak their resume to score a higher match percentage for specific roles.
5.  **Practice**: The user enters the **Mock Interview** tab to simulate an interview tailored exactly to the job they just matched with.

---
*Developed for the AI Solution Intern evaluation at Pragma & Will. by Chatrphol Ovanonchai*

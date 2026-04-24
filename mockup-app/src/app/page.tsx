"use client";

import { 
  Briefcase, 
  FileText, 
  LayoutDashboard, 
  Mic, 
  UploadCloud,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Target,
  BarChart,
  Search,
  Filter,
  MapPin,
  Building,
  Play,
  Video,
  Send,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">C</div>
          <div className="logo-text">CareerUp</div>
        </div>
        
        <nav className="nav-links">
          <div 
            className={`nav-link ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </div>
          <div 
            className={`nav-link ${activeTab === "jobs" ? "active" : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            <Briefcase size={20} />
            Job Matches
          </div>
          <div 
            className={`nav-link ${activeTab === "resume" ? "active" : ""}`}
            onClick={() => setActiveTab("resume")}
          >
            <FileText size={20} />
            CV Insights
          </div>
          <div 
            className={`nav-link ${activeTab === "interview" ? "active" : ""}`}
            onClick={() => setActiveTab("interview")}
          >
            <Mic size={20} />
            Mock Interview
          </div>
        </nav>
        
        <div style={{ marginTop: "auto", padding: "1rem", backgroundColor: "rgba(99, 102, 241, 0.1)", borderRadius: "12px", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
          <h4 style={{ color: "var(--primary)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>AI Model Active</h4>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            OpenAI GPT-4o & pgvector running
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "100%" }}></div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <div className="greeting">
            <h1>
              {activeTab === "home" && "Welcome back, Chatrphol 👋"}
              {activeTab === "jobs" && "AI Job Recommendations"}
              {activeTab === "resume" && "Resume AI Analysis"}
              {activeTab === "interview" && "AI Mock Interviewer"}
            </h1>
            <p>
              {activeTab === "home" && "Your personalized job and CV match assistant"}
              {activeTab === "jobs" && "Semantic matching via pgvector across Adzuna API"}
              {activeTab === "resume" && "Tailor your CV to specific job requirements"}
              {activeTab === "interview" && "Practice your communication skills with GPT-4"}
            </p>
          </div>
          <div className="user-profile">
            <button className="btn pulse" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Sparkles size={18} />
              {activeTab === "interview" ? "Start Session" : "AI Auto-Tune"}
            </button>
            <div className="avatar"></div>
          </div>
        </header>

        {/* Tab Views */}
        {activeTab === "home" && <DashboardHome />}
        {activeTab === "jobs" && <JobsView />}
        {activeTab === "resume" && <ResumeView />}
        {activeTab === "interview" && <InterviewView />}
        
      </main>
    </div>
  );
}

// --------------------------------------------------------
// SUB-COMPONENTS FOR EACH TAB
// --------------------------------------------------------

function DashboardHome() {
  return (
    <div className="dashboard-grid">
      {/* Left Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        
        {/* Upload Section */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <FileText size={20} color="var(--primary)" />
              Resume Analysis
            </h2>
          </div>
          <div className="upload-area">
            <div className="upload-icon">
              <UploadCloud size={24} />
            </div>
            <h3 style={{ marginBottom: "0.5rem" }}>Upload your latest CV</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              PDF, DOCX up to 5MB. Our AI will extract your skills and update your profile automatically.
            </p>
            <button className="btn btn-secondary">Browse Files</button>
          </div>
        </div>

        {/* AI Insights */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <Sparkles size={20} color="var(--secondary)" />
              AI Feedback
            </h2>
            <span className="badge" style={{ margin: 0, backgroundColor: "rgba(236, 72, 153, 0.1)", color: "var(--secondary)" }}>New</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem", backgroundColor: "rgba(16, 185, 129, 0.05)", borderLeft: "4px solid var(--success)", borderRadius: "0 8px 8px 0" }}>
              <h4 style={{ color: "var(--success)", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <CheckCircle2 size={16} /> Strong Match Found
              </h4>
              <p style={{ fontSize: "0.9rem" }}>Your recent addition of "Next.js" perfectly aligns with 12 new Front-End Developer roles.</p>
            </div>
            
            <div style={{ padding: "1rem", backgroundColor: "rgba(245, 158, 11, 0.05)", borderLeft: "4px solid var(--warning)", borderRadius: "0 8px 8px 0" }}>
              <h4 style={{ color: "var(--warning)", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <Target size={16} /> Improvement Area
              </h4>
              <p style={{ fontSize: "0.9rem" }}>Consider adding "FastAPI" or "Node.js" to your skills section based on your project experience. This will boost your Backend match rate.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        
        {/* Top Matches */}
        <div className="card" style={{ flex: 1 }}>
          <div className="card-header">
            <h2 className="card-title">
              <Briefcase size={20} color="var(--primary)" />
              Top Matches
            </h2>
            <a href="#" style={{ fontSize: "0.85rem" }}>View all</a>
          </div>
          
          <div className="job-list">
            <div className="job-item">
              <div className="company-logo">G</div>
              <div className="job-details">
                <h3 className="job-title">Full Stack Engineer</h3>
                <div className="job-company">Google via Adzuna</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <span className="badge">Next.js</span>
                  <span className="badge">Python</span>
                </div>
              </div>
              <div className="match-badge">94%</div>
            </div>

            <div className="job-item">
              <div className="company-logo" style={{ backgroundColor: "#1e1b4b" }}>M</div>
              <div className="job-details">
                <h3 className="job-title">AI Solutions Engineer</h3>
                <div className="job-company">Microsoft</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <span className="badge">OpenAI</span>
                  <span className="badge">React</span>
                </div>
              </div>
              <div className="match-badge">88%</div>
            </div>

            <div className="job-item">
              <div className="company-logo" style={{ backgroundColor: "#064e3b" }}>S</div>
              <div className="job-details">
                <h3 className="job-title">Backend Developer</h3>
                <div className="job-company">Supabase</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">FastAPI</span>
                </div>
              </div>
              <div className="match-badge">85%</div>
            </div>
          </div>
          
          <button className="btn btn-secondary" style={{ width: "100%", marginTop: "1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
            Find More Matches <ChevronRight size={16} />
          </button>
        </div>

        {/* Profile Stats */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <BarChart size={20} color="var(--primary)" />
              Profile Strength
            </h2>
          </div>
          
          <div className="stat-item">
            <div className="stat-header">
              <span>Front-End</span>
              <span style={{ color: "var(--success)" }}>90%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "90%", background: "var(--success)" }}></div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-header">
              <span>Back-End</span>
              <span style={{ color: "var(--warning)" }}>65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "65%", background: "var(--warning)" }}></div>
            </div>
          </div>
          
          <div className="stat-item" style={{ marginBottom: 0 }}>
            <div className="stat-header">
              <span>AI & Data</span>
              <span style={{ color: "var(--primary)" }}>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%" }}></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function JobsView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Filters */}
      <div className="card" style={{ padding: "1rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(0,0,0,0.2)", padding: "0.5rem 1rem", borderRadius: "8px", flex: 1 }}>
          <Search size={18} color="var(--text-muted)" />
          <input type="text" placeholder="Search by job title, skill, or company..." style={{ background: "transparent", border: "none", color: "white", width: "100%", outline: "none" }} />
        </div>
        <button className="btn btn-secondary" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}><Filter size={18} /> Filters</button>
      </div>

      {/* Expanded Job List */}
      <div className="dashboard-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          
          {[
            { title: "Full Stack Engineer", company: "Google", match: "94%", reason: "Your Next.js and Python experience perfectly aligns with their tech stack. High semantic similarity in problem-solving background.", color: "#1e40af", logo: "G" },
            { title: "AI Solutions Engineer", company: "Microsoft", match: "88%", reason: "Great overlap with your OpenAI API usage, but they prefer some C# background which you might need to pick up.", color: "#1e1b4b", logo: "M" },
            { title: "Backend Developer", company: "Supabase", match: "85%", reason: "Strong PostgreSQL and API background, fits the role perfectly. Your n8n workflow experience is a plus.", color: "#064e3b", logo: "S" },
            { title: "Frontend Developer", company: "Vercel", match: "91%", reason: "Exceptional React and Next.js portfolio. UI/UX design sense aligns with their standards.", color: "#000000", logo: "V" }
          ].map((job, idx) => (
            <div key={idx} className="card" style={{ display: "flex", gap: "1.5rem" }}>
              <div className="company-logo" style={{ width: "64px", height: "64px", fontSize: "1.5rem", backgroundColor: job.color }}>{job.logo}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.25rem" }}>{job.title}</h3>
                    <div style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
                      <span style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}><Building size={14} /> {job.company}</span>
                      <span style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}><MapPin size={14} /> Remote</span>
                    </div>
                  </div>
                  <div className="match-badge" style={{ fontSize: "1rem", padding: "0.5rem 0.75rem" }}>{job.match} Match</div>
                </div>
                
                <div style={{ backgroundColor: "rgba(99, 102, 241, 0.05)", borderLeft: "3px solid var(--primary)", padding: "0.75rem 1rem", borderRadius: "0 8px 8px 0" }}>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-main)", display: "flex", gap: "0.5rem" }}>
                    <Sparkles size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ lineHeight: "1.4" }}><strong>AI Analysis:</strong> {job.reason}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Saved Jobs / Alerts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="card">
            <h3 className="card-title" style={{ marginBottom: "1rem" }}><Target size={20} /> Targeted Skills</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1rem" }}>Skills employers in your matching bracket are looking for:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="badge">TypeScript (84% demand)</span>
              <span className="badge">GraphQL (62% demand)</span>
              <span className="badge">Docker (75% demand)</span>
              <span className="badge">AWS (90% demand)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeView() {
  return (
    <div className="dashboard-grid">
      <div className="card" style={{ gridColumn: "span 2" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h2 className="card-title">
            <FileText size={24} color="var(--primary)" />
            AI Resume Evaluator
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Targeting:</span>
            <select style={{ background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "white", padding: "0.5rem", borderRadius: "8px" }}>
              <option>Full Stack Engineer</option>
              <option>Frontend Developer</option>
              <option>AI Solutions Engineer</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem" }}>
          {/* Score section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.1)", borderRadius: "12px", padding: "2rem" }}>
            <div style={{ position: "relative", width: "150px", height: "150px", borderRadius: "50%", background: "conic-gradient(var(--primary) 82%, var(--border) 0)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <div style={{ width: "130px", height: "130px", borderRadius: "50%", background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--text-main)" }}>82</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>ATS Score</span>
              </div>
            </div>
            <h3 style={{ color: "var(--success)" }}>Good Match</h3>
            <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Your CV passes basic ATS checks, but lacks some semantic depth for AI roles.
            </p>
          </div>

          {/* AI Suggestions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.1rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>AI Optimization Suggestions</h3>
            
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(236, 72, 153, 0.05)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
              <AlertCircle size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <h4 style={{ marginBottom: "0.25rem" }}>Quantify your achievements</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Instead of "Developed API for web app", try adding metrics.</p>
                <div style={{ background: "rgba(0,0,0,0.2)", padding: "0.5rem", borderRadius: "4px", fontSize: "0.8rem", fontFamily: "monospace" }}>
                  <span style={{ color: "#ef4444", textDecoration: "line-through" }}>- Developed API for web app</span><br />
                  <span style={{ color: "#10b981" }}>+ Engineered high-throughput REST API using FastAPI, reducing response time by 40%</span>
                </div>
                <button className="btn" style={{ padding: "0.25rem 0.75rem", fontSize: "0.8rem", marginTop: "0.5rem" }}>Apply Change</button>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(99, 102, 241, 0.05)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
              <Target size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <h4 style={{ marginBottom: "0.25rem" }}>Missing Keywords detected</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Target jobs frequently mention <strong>Docker</strong> and <strong>CI/CD</strong>. We recommend weaving these into your "Recent Projects" section if applicable.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

function InterviewView() {
  return (
    <div className="dashboard-grid">
      {/* Video / Avatar Area */}
      <div className="card" style={{ display: "flex", flexDirection: "column" }}>
        <div className="card-header">
          <h2 className="card-title">
            <Video size={20} color="var(--secondary)" />
            Virtual Interviewer
          </h2>
          <span className="badge pulse" style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }}>● LIVE</span>
        </div>
        
        <div style={{ flex: 1, backgroundColor: "#000", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", minHeight: "300px", overflow: "hidden" }}>
          {/* Simulated AI Avatar Glow */}
          <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", opacity: 0.5, animation: "pulseGlow 3s infinite" }}></div>
          <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(0,0,0,0.6)", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem" }}>AI Recruiter (GPT-4o Voice)</div>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
          <button className="btn btn-secondary" style={{ borderRadius: "50%", width: "48px", height: "48px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><Mic size={20} color="#ef4444" /></button>
          <button className="btn btn-secondary" style={{ borderRadius: "50%", width: "48px", height: "48px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><Video size={20} /></button>
        </div>
      </div>

      {/* Transcript Area */}
      <div className="card" style={{ display: "flex", flexDirection: "column" }}>
        <h2 className="card-title" style={{ marginBottom: "1rem" }}>Live Transcript</h2>
        
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "1rem", paddingRight: "0.5rem", minHeight: "300px" }}>
          
          <div style={{ alignSelf: "flex-start", maxWidth: "80%", background: "rgba(99, 102, 241, 0.1)", padding: "1rem", borderRadius: "12px 12px 12px 0", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
            <p style={{ fontSize: "0.9rem" }}>Hello Chatrphol! I noticed on your CV that you built a Job & CV Match Assistant. Could you walk me through how you implemented the pgvector search functionality in Supabase?</p>
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.5rem", display: "block" }}>AI • 10:02 AM</span>
          </div>

          <div style={{ alignSelf: "flex-end", maxWidth: "80%", background: "var(--surface-hover)", padding: "1rem", borderRadius: "12px 12px 0 12px", border: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.9rem" }}>Sure! So basically, I used OpenAI embeddings to convert the user's CV and job descriptions into vectors, and then stored them in PostgreSQL using pgvector. When a user looks for a job, it does a cosine similarity search to find the closest matches.</p>
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.5rem", display: "block" }}>You • 10:03 AM</span>
          </div>
          
          <div style={{ alignSelf: "flex-start", maxWidth: "80%", background: "rgba(99, 102, 241, 0.1)", padding: "1rem", borderRadius: "12px 12px 12px 0", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
            <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "pulseGlow 1s infinite" }}></div>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "pulseGlow 1s infinite 0.2s" }}></div>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "pulseGlow 1s infinite 0.4s" }}></div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
          <input type="text" placeholder="Type a response or speak..." style={{ flex: 1, background: "rgba(0,0,0,0.2)", border: "1px solid var(--border)", color: "white", padding: "0.75rem 1rem", borderRadius: "8px", outline: "none" }} />
          <button className="btn" style={{ padding: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}><Send size={18} /></button>
        </div>
      </div>
    </div>
  );
}

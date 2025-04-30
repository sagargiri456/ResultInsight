# 📊 ResultInsights

ResultInsights is a smart web application that analyzes class-wide student marksheets to generate actionable performance reports. Designed for educators and administrators, it provides insights per subject, compares performance trends over the last 5 years, and visualizes student distributions to help improve academic outcomes.

## 🧠 Key Features

- 📥 Upload PDF marksheets (1 page per student)
- 📈 Subject-wise performance analysis
- 🕰️ Year-over-year comparison of subjects (last 5 years)
- 📊 Student performance distribution (marks range visualization)
- 🤖 AI-driven suggestions for academic improvement
- 📤 Export performance reports and graphs

## 🛠️ Tech Stack

### Frontend
- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **UploadThing** (file uploads)
- **Clerk** (authentication)

### Backend
- **Python (Flask)**
- **SQLAlchemy + Psycopg2** (with NeonDB)
- **PyPDF2** (PDF parsing)
- **Machine Learning Models** (for pattern detection and suggestions)

### PDF Processing
- **pdf-lib + Mozilla PDF.js** (frontend)
- **PyPDF2** (backend)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Python (v3.10+)
- PostgreSQL-compatible NeonDB instance
- UploadThing API Key
- Clerk credentials

### 1. Clone the repo

```bash
git clone https://github.com/your-username/resultinsights.git
cd resultinsights
# ResultInsight

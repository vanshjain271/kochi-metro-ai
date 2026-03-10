# 🚇 Kochi Metro Intelligence — AI-Powered Document Management

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An AI-powered document management system built for **Kochi Metro Rail Limited (KMRL)**. It combines OCR-based document processing, intelligent classification, and automated summarization to streamline metro operations paperwork.

---

## 🏗️ Architecture

```
kochi-metro-ai/
├── frontend/              # Browser-based UI
│   ├── index.html         # Main SPA entry point
│   ├── style.css          # Design system & component styles
│   └── app.js             # Application logic & API integration
│
├── backend/               # FastAPI Python API
│   ├── app.py             # FastAPI application & routes
│   ├── ocr_module.py      # Tesseract OCR processing
│   ├── classifier_module.py  # Document classification
│   ├── summarizer_module.py  # AI-powered summarization
│   ├── requirements.txt   # Python dependencies
│   └── Procfile           # Deployment configuration
│
└── README.md
```

### How It Works

1. **Upload** — Users upload metro documents (PDF, DOC, images) via the frontend
2. **OCR** — The backend extracts text from scanned documents using Tesseract
3. **Classify** — AI classifies documents (reports, checklists, schedules, audits)
4. **Summarize** — Key findings are automatically summarized
5. **Dashboard** — Real-time analytics, processing pipelines, and AI recommendations

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.10+** with `pip`
- **Tesseract OCR** installed on your system
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Backend Setup

```bash
# Clone the repo
git clone https://github.com/vanshjain271/kochi-metro-ai.git
cd kochi-metro-ai

# Install Python dependencies
cd backend
pip install -r requirements.txt

# Install Tesseract (macOS)
brew install tesseract

# Start the API server
uvicorn app:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

### Frontend Setup

```bash
# From the project root
cd frontend

# Open in browser (macOS)
open index.html

# Or use a local server
python3 -m http.server 3000
```

Then visit `http://localhost:3000` in your browser.

---

## 📡 API Endpoints

| Method | Endpoint | Description              |
|--------|----------|--------------------------|
| `GET`  | `/`      | Health check             |
| `POST` | `/ocr`   | Upload & OCR a document  |

### Example: OCR a document

```bash
curl -X POST http://localhost:8000/ocr \
  -F "file=@document.pdf"
```

**Response:**
```json
{
  "success": true,
  "data": "Extracted text from the document..."
}
```

---

## ✨ Features

- **📄 Document Processing Pipeline** — Real-time upload → OCR → analysis → completion
- **🤖 AI Assistant** — Context-aware chatbot for system queries
- **📊 Analytics Dashboard** — Processing trends, accuracy metrics, cost savings
- **🔔 Smart Notifications** — Priority-based alerts and recommendations
- **🌐 Multilingual** — English and Malayalam (മലയാളം) support
- **🌙 Dark Mode** — Full light/dark theme with system preference detection
- **📱 Responsive Design** — Works on desktop, tablet, and mobile

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "Add amazing feature"`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

Please ensure your code follows the existing style and includes appropriate comments.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Kochi Metro Rail Limited](https://kochimetro.org/) — Inspiration for this project
- [FastAPI](https://fastapi.tiangolo.com/) — High-performance Python API framework
- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) — Open-source OCR engine
- [Chart.js](https://www.chartjs.org/) — Beautiful chart library

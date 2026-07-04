# DnDSpellTracker

Simple site to track D&D 5e character spell slots.

## Current starter setup

This repository now contains a minimal starter app with:
- a React frontend
- a FastAPI backend
- SQLite-ready backend structure
- a single Docker container setup

## Local development

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open http://localhost:5173 for the React app.

## Docker

Build and run:

```bash
docker build -t dnd-spell-tracker .
docker run -p 8000:8000 dnd-spell-tracker
```

Then open http://localhost:8000.

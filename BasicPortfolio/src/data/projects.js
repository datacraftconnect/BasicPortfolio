export const projects = [
  {
    id: "adf-failure-analyzer",
    title: "ADF Failure Analyzer",
    imageSrc: "/projects/ADF_Analyzer.png",
    description: "A full-stack web dashboard for analyzing Azure Data Factory failure logs using a rule-based engine.",
    skills: ["React", "FastAPI", "Python", "Azure"],
    demo: "#",
    source: "#",
    details: `This project is a full-stack proof-of-concept designed to analyze Azure Data Factory (ADF) failure logs. It provides a web dashboard that ingests, processes, and visualizes log data to identify failure patterns.

### Key Features

1. **Azure Log Analytics Integration**: Fetches ADF failure logs directly from Azure.
2. **Rule-Based Pattern Engine**: Analyzes logs to detect recurring failure patterns.
3. **Interactive Dashboard**: Visualizes detected patterns and provides a detailed view of ingested failures.
4. **Secure Authentication**: Uses Microsoft Authentication Library (MSAL) for Azure account sign-in.

### Technology Stack

- **Frontend**: React
- **Backend**: FastAPI (Python)
- **Cloud Services**: Azure Log Analytics, Azure Active Directory (for MSAL)

### MVP Architecture

The application follows a classic client-server architecture.

### Frontend (React)
1. **User Interface**: A simple, clean dashboard built with React components.
2. **State Management**: Manages application state, including user authentication status and log data.
3. **API Communication**: Interacts with the backend via RESTful API calls to trigger data ingestion and fetch analysis results.

### Backend (FastAPI)
1. **API Endpoints**: Exposes endpoints for data ingestion ('/ingest/adf') and retrieving results ('/failures', '/patterns').
2. **Data Ingestion**: On request, it connects to Azure Log Analytics, fetches the latest ADF failure logs.
3. **Log Processing**: Normalizes the raw log data into a consistent format.
4. **Pattern Analysis**: A rule-based engine runs on the processed logs to identify known failure signatures.
5. **In-Memory Storage**: For this MVP, processed logs and detected patterns are stored in-memory.`
  }
];
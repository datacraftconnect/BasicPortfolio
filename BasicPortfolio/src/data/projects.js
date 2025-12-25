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
  },
  {
    id: "react-portfolio",
    title: "Personal Portfolio Website",
    imageSrc: "/projects/Portfolio_ReactVite.png",
    description: "The portfolio website you are currently viewing. A responsive client-side rendered application built with React and Vite.",
        skills: ["React", "JavaScript","Vite", "CSS Modules"],
    demo: "#",
    source: "#",
    details: `This project is the portfolio you are currently exploring, designed to showcase my skills and projects in a clean, responsive interface. It is a client-side rendered (CSR) application built from the ground up using modern frontend technologies.

### Key Features

1.  **Component-Based UI**: Built with React, featuring a modular architecture with reusable components for elements like the navigation bar, project cards, and footer.
2.  **Fast Development Environment**: Leverages Vite for near-instant Hot Module Replacement (HMR), providing a highly efficient development experience.
3.  **Responsive Design**: Styled with CSS Modules for scoped, conflict-free styling, ensuring the layout adapts seamlessly to different screen sizes.
4.  **Dynamic Content**: Integrates with third-party APIs to display dynamic data, such as the GitHub statistics on the 'About' page.

### Technology Stack

-   **Frontend**: React, Vite, JavaScript (ES6+)
-   **Styling**: CSS Modules, PostCSS
-   **Deployment**: Vercel (with automated CI/CD via Git)

### Application Architecture

This is a frontend-only, single-page application (SPA) where the user interface is built and managed entirely in the browser.

#### Frontend (React & Vite)
1. **UI Rendering**: React is used to build a component-based interface. It manages the application's state and renders all views dynamically.
2. **Build & Development**: Vite serves as the build tool, providing a fast development server with Hot Module Replacement (HMR) and optimizing the project for production.
3. **Routing**: All navigation is handled by client-side routing, which updates the URL and swaps components without requiring a full page reload from a server.
4. **API Communication**: Interacts with external, third-party APIs (like the GitHub stats service) to fetch and display dynamic, real-time data.`
  }
];
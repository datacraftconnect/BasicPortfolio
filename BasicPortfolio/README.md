# Basic Portfolio Website

This is a simple, clean, and modern portfolio website built with React. It's designed to showcase projects, skills, and professional experience in an elegant way.

## Live Demo

[Link to your live portfolio website](https://your-portfolio-url.com)

## Features

- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Modern UI**: Clean and minimal user interface.
- **Project Showcase**: A dedicated section to display your projects with details.
- **Component-Based**: Built with reusable React components.
- **Easy to Customize**: Project data is stored in a simple JavaScript file, making it easy to add your own projects.

## Technology Stack

- **Frontend**:
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/) for navigation
  - CSS Modules for component-level styles
  - [Tailwind CSS](https://tailwindcss.com/) (as per `tailwind.config.js`)

## Project Structure

The project follows a standard React application structure:

```
/
├── public/              # Static assets
└── src/
    ├── assets/          # Images and other assets imported in components
    ├── components/      # Reusable React components
    ├── data/            # Project data and other static content
    └── ...              # Other source files
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Navigate to the project directory
    ```sh
    cd BasicPortfolio
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```

### Usage

To run the app in the development mode:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or whatever port is shown in your terminal) to view it in the browser. The page will reload if you make edits.

To build the app for production:

```sh
npm run build
```

This will build the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

To add your own projects, edit the `src/data/projects.js` file. The `projects` array contains objects, where each object represents a project. Follow the existing structure to add your own.

Project images can be placed in the `public/projects` directory and referenced from `src/data/projects.js`.
# Assignment Submission System

## Overview
A web-based application that allows students to submit assignments and instructors to manage submissions efficiently. Built with React + Vite, this system offers a seamless user experience with modern UI components and real-time updates.

## Features
- 📄 **View Assignments:** Students can browse available assignments with details like title, description, and due date
- 🚀 **Submit Assignments:** Submit files (PDF) with student details and comments
- ✅ **Real-Time Status Updates:** Get confirmation upon successful submission
- 🔍 **Responsive UI:** Clean and modern design with Tailwind CSS for optimal user experience
- 🌐 **Routing & State Management:** React Router for navigation and Context API for global state

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Assignment-Submission-System.git
    cd Assignment-Submission-System
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start development server:
    ```bash
    npm run dev
    ```

## Technology Stack
- ⚛️ React + Vite (Fast development, optimized build)
- 🎨 Tailwind CSS (Utility-first styling)
- 🌍 React Router (Navigation)
- 📦 Context API (State management)
- ✅ ESLint (Code quality)
- ⚡ Fast Refresh & HMR (Instant updates)

### Supporting Plugins
- @vitejs/plugin-react (Babel)
- @vitejs/plugin-react-swc (SWC)

## Development
- Assignments are stored in a local `assignments.json` file for simulation
- Context API manages assignment data and submission states
- The application is structured into `pages/`, `components/`, and `context/` for scalability

## Deployment
To deploy the project on Netlify or Vercel:
```bash
npm run build
```
Then follow deployment instructions on your preferred platform.

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Submit a pull request

## License
📝 MIT License

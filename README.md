A complete full-stack application built as part of the MPloyChek internship evaluation. The project features a modern Angular frontend architecture paired with a reliable Node.js/Express backend API to deliver role-based data views with simulated network latency handling.

## 🚀 Features
- **Secure Authentication UI:** User login with real-time field validation and role-selection routing.
- **Role-Based Access Control (RBAC):** Separate interactive workspaces loaded dynamically depending on user permissions (General User vs. Admin).
- **Asynchronous Latency Simulation:** Implements a customizable network delay parameter on data loading to mimic real-world production environments.
- **Clean Architecture:** Fully decoupled frontend and backend services utilizing a unified Git layout.

---

## 🛠️ Technology Stack
- **Frontend:** Angular (v17+ Single Page Application architecture)
- **Backend:** Node.js, Express.js, CORS Middleware
- **Styling:** Modular CSS grid and flexbox layouts

---

## 💻 Getting Started Locally

Follow these quick steps to get the entire environment running on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### 1. Clone the Repository
```bash
git clone [https://github.com/Anudeep123Chary/mploychek-project.git](https://github.com/Anudeep123Chary/mploychek-project.git)
cd mploychek-project
2. Set Up the Backend Server
Bash
cd backend
npm install
node server.js
The API gateway will launch automatically at http://localhost:3000

3. Set Up the Frontend Application
Open a new terminal window, navigate back to the root, and enter the frontend workspace:

Bash
cd frontend
npm install
npm start
The UI compilation will complete and go live at http://localhost:4200

Configured Test Credentials
Use these preset test accounts in the login interface to evaluate the custom workspaces:

1. General User Workspace
Username: user1

Password: password123

Role: General User

Displays the Staff Verification Workspace data grid.

2. Administrative Deck
Username: admin1

Password: password123

Role: Admin

Displays the Administrative System User Log grid.

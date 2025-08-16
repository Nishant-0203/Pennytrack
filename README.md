# 💰 Pennytrack – Expense Tracker

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</p>

A full-stack expense and income tracker to help users manage personal finances with visual insights, notifications, and real-time data.

---

## 📑 Table of Contents
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [⚙️ Installation](#️-installation)
- [▶️ Running the Application](#️-running-the-application)
- [🔑 Environment Variables](#-environment-variables)
- [📡 API Endpoints](#-api-endpoints)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Features
- 🔐 **User Authentication** (Sign up / Sign in with JWT)
- ➕ **Add / Delete / List Incomes & Expenses**
- 📊 **Dashboard with bar & pie charts** (category-wise spending, income vs expense)
- 🔔 **WhatsApp Notifications** for finance updates using **Twilio API**
- 💹 **Crypto Marketplace Integration** with **CoinGecko API** for real-time crypto prices
- 📱 **Responsive Design** (mobile + desktop) with Tailwind CSS
- 🗄 **Persistent Storage** with MongoDB

---

## 🛠 Tech Stack
- **Frontend**: ⚛️ React + 🎨 TailwindCSS
- **Backend**: 🟩 Node.js + 🚂 Express.js
- **Database**: 🍃 MongoDB (local / MongoDB Atlas)
- **APIs Used**:
  - 📈 CoinGecko API (real-time crypto data)
  - 📲 Twilio API (WhatsApp notifications)

---

## 📋 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or Atlas)

---

## ⚙️ Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd Pennytrack
    ```

2.  **Set up the backend:**
    ```bash
    cd backend
    npm install
    ```

3.  **Set up the frontend:**
    ```bash
    cd ../frontend/expense-tracker
    npm install
    ```

---

## ▶️ Running the Application

1.  **Configure Environment Variables:**
    - Create a `.env` file in the `backend` directory.
    - Create a `.env` file in the `frontend/expense-tracker` directory.
    - Populate them with the necessary keys as described in the Environment Variables section.

2.  **Start your MongoDB server** (either locally or ensure your Atlas cluster is accessible).

3.  **Run the backend server:**
    ```bash
    cd backend
    npm start
    ```
    The backend will be running on `http://localhost:5000` (or the port you specify).

4.  **Run the frontend application:**
    ```bash
    cd ../frontend/expense-tracker
    npm start
    ```
    The frontend will be accessible at `http://localhost:3000`.

---

## 🔑 Environment Variables

### Backend (`backend/.env`)
```dotenv
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pennytrack
JWT_SECRET=your_jwt_secret

# External APIs
COINGECKO_API=https://api.coingecko.com/api/v3
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+123456789
```

### Frontend (`frontend/expense-tracker/.env`)
```dotenv
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 📡 API Endpoints

### 🔐 Auth
- `POST /api/auth/register` → Register a new user.
- `POST /api/auth/login` → Log in and receive a JWT.

### 💸 Expenses
- `GET /api/expenses` → Fetch all expenses for the logged-in user.
- `POST /api/expenses` → Add a new expense.
- `DELETE /api/expenses/:id` → Delete an expense by its ID.

### 💰 Income
- `GET /api/incomes` → Fetch all incomes for the logged-in user.
- `POST /api/incomes` → Add a new income.
- `DELETE /api/incomes/:id` → Delete an income by its ID.

### 📈 Crypto
- `GET /api/crypto/prices` → Fetch real-time crypto prices from CoinGecko.

---

## 🤝 Contributing
Contributions are welcome! 🚀

1.  Fork the repo 🍴
2.  Create your branch 👉 `git checkout -b feature/YourFeature`
3.  Commit changes 💾 `git commit -m "Add feature"`
4.  Push to the branch 📤 `git push origin feature/YourFeature`
5.  Open a Pull Request 🔥

---

## 📜 License
This project currently does not have a license. Consider adding one like MIT.

---

✨ Built with ❤️ using the MERN Stack

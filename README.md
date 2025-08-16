# 💸 Pennytrack

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js) ![Express](https://img.shields.io/badge/Express.js-Backend-blue?logo=express) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb) ![React](https://img.shields.io/badge/React-19-blue?logo=react) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss)

---

> **Pennytrack** is a full-stack expense and income tracker web application that helps users manage their finances by tracking income, expenses, and providing insightful dashboards and analytics.

---

## ✨ Features

- 🔐 **User authentication** (register, login, JWT-based sessions)
- 💰 **Add, view, and delete income sources**
- 🛒 **Add, view, and delete expense categories**
- 📊 **Dashboard** with:
  - 💵 Total balance, income, and expenses
  - 🕒 Recent transactions
  - 📅 Last 30 days expenses and last 60 days income
  - 📈 Visual charts and analytics
- 📥 **Download income and expense data as Excel files**
- 🖼️ **Profile image upload**
- 🖥️ **Responsive, modern UI** built with React and TailwindCSS

---

## 🛠️ Tech Stack

### Backend
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) Node.js, Express.js
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) MongoDB (via Mongoose)
- 🔑 JWT for authentication
- 🗂️ Multer for file uploads
- 📑 XLSX for Excel export

### Frontend
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) React 19
- ⚡ Vite
- 🎨 TailwindCSS
- 🔗 Axios
- 🧭 React Router DOM
- 📊 Recharts (charts)
- 😀 Emoji Picker, 🎨 React Icons, and more

---

## 🗂️ Project Structure

```
Pennytrack/
  backend/        # Express API, MongoDB models, controllers, routes
  frontend/
    expense tracker/  # React app (Vite + TailwindCSS)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```
Start the backend server:
```bash
npm run dev # or npm start
```
_Backend runs on `http://localhost:8000` by default._

### Frontend Setup
```bash
cd "frontend/expense tracker"
npm install
npm run dev
```
_Frontend runs on `http://localhost:5173` by default._

---

## 📝 Usage

1. 📝 **Register** a new account or **log in**.
2. 💵 **Add your income sources** and 🛒 **expenses**.
3. 📊 **View your dashboard** for analytics and recent transactions.
4. 📥 **Download your data** as Excel files for offline use.
5. 🖼️ **Upload a profile image** for your account.

---

## 📡 API Endpoints (Backend)

| Method | Endpoint                        | Description                  |
|--------|----------------------------------|------------------------------|
| POST   | `/api/v1/auth/register`         | Register a new user          |
| POST   | `/api/v1/auth/login`            | Login and receive JWT        |
| GET    | `/api/v1/auth/getUser`          | Get user info (auth required)|
| POST   | `/api/v1/auth/upload-image`     | Upload profile image         |
| POST   | `/api/v1/income/add`            | Add income (auth required)   |
| GET    | `/api/v1/income/get`            | Get all income (auth req.)   |
| DELETE | `/api/v1/income/:id`            | Delete income (auth req.)    |
| GET    | `/api/v1/income/downloadexcel`  | Download income as Excel     |
| POST   | `/api/v1/expense/add`           | Add expense (auth required)  |
| GET    | `/api/v1/expense/get`           | Get all expenses (auth req.) |
| DELETE | `/api/v1/expense/:id`           | Delete expense (auth req.)   |
| GET    | `/api/v1/expense/downloadexcel` | Download expenses as Excel   |
| GET    | `/api/v1/dashboard/`            | Get dashboard data (auth req)|

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

---

## 📄 License

This project is licensed under the ISC License.

---

<p align="center"><b>💸 Happy tracking with Pennytrack! 💸</b></p>

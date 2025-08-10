import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
import Home from './pages/Dashboard/home';
import Income from './pages/Dashboard/income';
import Expense from './pages/Dashboard/expense';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

const Root = () =>{
// Check if token exists in localStorage
const isAuthenticated = !! localStorage.getItem("token");
// Redirect to dashboard if authenticated, otherwise to login
return isAuthenticated? (
<Navigate to="/dashboard" />
) : (
<Navigate to="/login" />
);
};
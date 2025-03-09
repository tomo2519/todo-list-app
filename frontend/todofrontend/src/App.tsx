import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp"; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login';

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/signup" element={<SignUp />} />  {/* 🔹 新規登録ページ */}
              <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
  );
}
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Auth0Provider } from '@auth0/auth0-react';
import PomodoroTimer from './Timer';
import YearProgress from './yearCounter';
import DailyGoalsForm from './components/Daily';
import MonthlyGoalsForm from "./components/Month";
import YearGoalsForm from "./components/Year"
import { LoginForm } from './components/Login';
import {RegistrationForm} from './components/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-teal-400'>
      <Auth0Provider
        domain="dev-fzi4g8f1d4832u8a.us.auth0.com"
        clientId="r35mdMCRrlT295IuYjqFhARfSAT6nfBN"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/daily-goals" element={<DailyGoalsForm />} />
            <Route path="/monthly-goals" element={<MonthlyGoalsForm />} />
            <Route path="/yearly-goals" element={<YearGoalsForm />} />
            <Route path="/" element={<YearProgress />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </Router>
        <div>
          {/* <PomodoroTimer /> */}
        </div>
      </Auth0Provider>
      <ToastContainer />
      {/* Other components */}
    </div>
  );
}

export default App;

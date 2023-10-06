
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import { Auth0Provider } from '@auth0/auth0-react';
import PomodoroTimer from './Timer';
import YearProgress from './yearCounter';
import Goals from './components/Goals';
import DailyGoalsForm from "./components/Daily";



function App() {
  return (
    <div className='min-h-screen flex flex-col'>
    <Auth0Provider
    domain="dev-fzi4g8f1d4832u8a.us.auth0.com"
    clientId="r35mdMCRrlT295IuYjqFhARfSAT6nfBN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Navbar />
      <YearProgress />
      
    <Router>
    <Routes>
        <Route path="/daily-goals" element={DailyGoalsForm} />
        <Route path="/" element={YearProgress} />
      </Routes>  
    </Router>
        <div>
          <PomodoroTimer />
        </div>
      </Auth0Provider>
      {/* <Goals /> */}
      {/* <Breaks/> */}
      {/* <Profile/> */}
      {/* <Footer />   */}
  </div>
  );
}
export default App;

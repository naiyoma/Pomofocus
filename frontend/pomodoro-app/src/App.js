import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Auth0Provider } from '@auth0/auth0-react';
import PomodoroTimer from './Timer';
import YearProgress from './yearCounter';
import Goals from './components/Goals';


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
    <div>
      {/* <Goals /> */}
    <PomodoroTimer />
    </div>
      </Auth0Provider>
      {/* <Breaks/> */}
      
      {/* <Profile/> */}
      {/* <Footer />   */}
  </div>
  );
}

export default App;

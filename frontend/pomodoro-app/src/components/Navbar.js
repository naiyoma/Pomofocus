import React, { useState } from 'react';
import Profile from './Profile';
import Settings from './Settings';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="shadow py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-rose-900">Focus App</h1>
        <div className="flex items-center gap-1">
          <div className="mr-2">
            {!isAuthenticated && (
              <button
                onClick={() => loginWithRedirect()}
                className="rounded-full border-solid border-2 border-rose-900 w-20 bg-rose-100 text-rose-900"
              >
                Login
              </button>
            )}
            {isAuthenticated && <Profile />}
          </div>
          <div className="ml-4">
            <Settings />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user,logout } = useAuth0();  

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
    <>
        <div
        onClick={toggleModal}
        className="relative w-10 h-10 overflow-hidden bg-rose-100 rounded-full dark:bg-rose-600 cursor-pointer"
        >
        <svg
          className="absolute w-12 h-12 text-rose-900 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
        ></path>
        </svg>
      </div>
      {isModalOpen && (
  // Modal content goes here
  <div className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-96 mx-auto mt-20 p-6 relative">
      <button
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={toggleModal}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
    
      <div className="flex flex-col space-y-4">
      <span>{user.name}</span>
      <button className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 12H6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 4H6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 20H6"
            />
          </svg>
          <span>Edit Profile</span>
        </button>
        <button className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
          <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</span>
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default Profile;
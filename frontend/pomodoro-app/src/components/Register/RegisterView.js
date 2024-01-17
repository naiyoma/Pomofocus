import React, { useState } from 'react';
import { register } from "../services/RegisterService";

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onsubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Call the register function with the form values
      const response = await register({
        details: {
          email,
          username,
          password,
          confirm_password: confirmPassword
        }
      });

      console.log('Registration successful:', response);
      // Add any additional handling for successful registration
    } catch (error) {
      console.error('Error during registration:', error);
      // Add error handling as needed
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <form className="w-[450px] pt-[30px] pb-[20px] relative shadow bg-white " onSubmit={onsubmit}>
        <div className="pl-[12%] pr-[12%]">
          <h3 className="text-center mb-[1em] text-2xl">Register</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Already Have Account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

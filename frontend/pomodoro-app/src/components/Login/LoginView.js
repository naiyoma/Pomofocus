import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/LoginService";
const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();
    
  const onsubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Call the register function with the form values
      const response = await login({
        details: {
          email,
          password
        }
      });

      console.log('Login successful:', response);
      navigate('/');
      // Add any additional handling for successful registration
    } catch (error) {
      console.error('Error during login:', error);
      // Add error handling as needed
    }
  };
        

        return (
          <div className="flex justify-center items-center w-screen h-screen">
          <form className="w-[450px] pt-[30px] pb-[20px] relative shadow bg-white" onSubmit={onsubmit}>
            <div className="pl-[12%] pr-[12%]">
              <h3 className="text-center mb-[1em] text-2xl">Sign In</h3>
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
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                New User? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
        )
      }
    

export default LoginForm;

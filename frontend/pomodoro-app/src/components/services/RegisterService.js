import axios from "axios";
import endPoint from "../Configs";
import { toast } from "react-toastify";

export const register = async ({ details: { email, password, confirm_password, username } }) => {
  try {
    const apiUrl = `${endPoint.API_BASE_URL}/create-user/`;

    const response = await axios.post(apiUrl, {
      email,
      password,
      confirm_password,
      username
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      toast.success("Registration successful");
      return response.data;
    } else {
      toast.error("Registration failed: Unexpected response status");
      return null; 
    }
  } catch (error) {
    if (error.response) {
      toast.error(`Registration failed: ${error.response.data['detail']}`);
    } else if (error.request) {
      toast.error("Registration failed: No response received");
    } else {
      toast.error("Registration failed: Request setup error");
    }
    
    return null;
  }
};

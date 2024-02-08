import axios from "axios";
import endPoint from "../Configs";
import { toast } from "react-toastify";
import { POMOFOCUS_USER_DATA } from "./Constants";
export const login = async ({
  details: { email, password }
}) => {
  try {
    const response = await axios.post(`${endPoint.API_BASE_URL}/login`, {
       
        email,
        password
      
    });
    if (response.status === 200) {
      toast.success("Login successful");
      localStorage.setItem(POMOFOCUS_USER_DATA, JSON.stringify(response.data));
      return response.data;

    } else {
      toast.error("Login failed: Unexpected response status");
      return null; 
    }
  } catch (error) {
    if (error.response) {
      toast.error(`Login failed: ${error.response.data['detail'][0]['msg']}`);
    } else if (error.request) {
      toast.error("Login failed: No response received");
    } else {
      toast.error("Login failed: Request setup error");
    }
    
    return null;
  
  }
};

import axios from "axios";
import endPoint from "../Configs";

export const register = async ({
  details: { email, password, confirm_password, username }
}) => {
    const apiUrl = `${endPoint.API_BASE_URL}/create-user/`;
  
    try {
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
    
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};

import axios from "axios";
import endPoint from "../Configs";

export const login = async ({
  details: { email, password }
}) => {
  try {
    const response = await axios.post(`${endPoint.API_BASE_URL}/login`, {
       
        email,
        password
      
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};

import axios from "axios";
import endPoint from "../Configs";

export const register = async ({
  details: { email, password, confirm_password, username }
}) => {
  try {
    const response = await axios.post(`${endPoint.API_BASE_URL}/create-user`, {
       
        email,
        password,
        confirm_password,
        username
      
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};

import axios from "axios";
import endPoint from "../Configs";
import { toast } from "react-toastify";

export const addDailyGoal = async ({  user_id,goal1, goal2, goal3,goal4,goal5  }) => {
  try {
    const apiUrl = `${endPoint.API_BASE_URL}/daily-goals/`;

    const response = await axios.post(apiUrl, {
      user_id,
      goal1,
      goal2,
      goal3,
      goal4,
      goal5
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      toast.success("Added Daily Goals successfully");
      return response.data;
    } else {
      toast.error("Adding Goals failed: Unexpected response status");
      return null; 
    }
  } catch (error) {
    if (error.response) {
      toast.error(``);
    } else if (error.request) {
      toast.error("Adding Goals failed: No response received");
    } else {
      toast.error("Adding Goals failed: Request setup error");
    }
    
    return null;
  }
};


export const getDailyGoal = async ({ user_id, created_at }) => {
  try {
    const queryParams = new URLSearchParams({ created_at: created_at });
    const apiUrl = `${endPoint.API_BASE_URL}/daily_goals/${user_id}/created_at?${queryParams}`;

    const response = await axios.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      toast.error("Get Goals failed: Unexpected response status");
      return null; 
    }
  } catch (error) {
    if (error.response) {
      toast.error(`Error: ${error.response.data.detail}`);
    } else if (error.request) {
      toast.error("Get Goals failed: No response received");
    } else {
      toast.error("Get Goals failed: Request setup error");
    }
    
    return null;
  }
};


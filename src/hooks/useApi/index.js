import axios from 'axios';
import { useState } from 'react';

const API_URL = "http://localhost:3001/";
const API_VERSION_URL = API_URL + "api/v1/";

const useApi = () => {
  const [error, setError] = useState(false);

  const getApiVersion = async () => {
    try {
      const response = await axios.get(`${API_URL}api/version`);
      return response.data;
    } catch (error) {
      setError(error)
    }
  };

  const getAccessToken = async () => {
    try {
      const response = await axios.get(`${API_VERSION_URL}getAccessToken`);
      return response.data;
    } catch (error) {
      setError(error)
    }
  }
    
  return {
    error,
    getApiVersion,
    getAccessToken
  };
};

export default useApi;
import axios from 'axios';
import { useState } from 'react';
const options = { headers: { 'Content-Type': 'application/json' } };

const API_URL = "http://localhost:3001/";

const useApi = () => {
  const [error, setError] = useState(false);

  const getApiVersion = async () => {
    try {
      const response = await axios.get(`${API_URL}api/version`,options);
      return response.data;
    } catch (error) {
      setError(error)
    }
  };
    
  return {
    error,
    getApiVersion
  };
};

export default useApi;
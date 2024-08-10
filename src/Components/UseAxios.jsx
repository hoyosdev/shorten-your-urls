import axios from "axios";
import { useState } from "react";


const token = process.env.REACT_APP_API_KEY;
console.log(token)
axios.defaults.baseURL = `https://api.tinyurl.com/create?api_token=${token}`;

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const operation = async (params) => {
    try {
      setLoading(true);
      setError("");
      const result = await axios.request(params);
      setResponse(result.data.data.tiny_url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { response, error, operation, loading };
};

export default useAxios;

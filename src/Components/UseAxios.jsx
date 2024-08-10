import axios from "axios";
import { useState } from "react";

const token = "xvuW5AYFn8t385toz5MvNEZZmuoyUVHBzzCZN4gAWNOR9l5Tks6R6u1T4eQd";
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

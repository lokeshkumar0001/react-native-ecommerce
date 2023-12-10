import { useState, useEffect } from "react";
import axios from "axios";
export const useGetProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setIsLoading(false);
        setData(res.data)
      } catch (error) {
        setIsLoading(false)
        setError(error)
      }
    }
    fetchData();
  }, []);

  return [ isLoading, data, error ];
};

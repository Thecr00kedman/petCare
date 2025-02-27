import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          withCredentials: true, 
        });

        setData(response?.data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // Cleanup function to prevent memory leaks
  }, [url]);

  return { data, loading, error };
};

export default useGet;

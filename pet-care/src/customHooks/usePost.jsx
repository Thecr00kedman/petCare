import React, { useEffect } from "react";

const usePost = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const postData = async (body) => {
    try {
      const response = await axios.post(url,body);
      setData(response?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { postData, loading, error };
};

export default usePost;

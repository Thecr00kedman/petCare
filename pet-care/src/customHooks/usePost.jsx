import React, { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const usePost = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const postData = async (body) => {
    try {
      const response = await axios.post(url,body,
        {withCredentials: true}
      );
      console.log(response,'line 12 use post')
      setData(response?.data);
      toast.success(response?.data?.message)
      return response?.data
      
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { postData, loading, error };
};

export default usePost;

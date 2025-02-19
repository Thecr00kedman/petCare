import React, { useEffect } from 'react'

const useGet = (url) => {
    const[data,setData]=useState()
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState()
  
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response= await axios.get(url)
                setData(response?.data)
              } catch (error) {
                setError(error)
              }
              finally{
                setLoading(false)
              }
        }
        fetchData()      
    },[url])
    
    return { data, loading, error };
}

export default useGet

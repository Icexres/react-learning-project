import { useState, useEffect } from "react";

const useFetch =()=>{
const [data,setData]= useState(null);
const [isPending,setIsPending]=useState(true);
const [error, setError]=useState(null);

    useEffect(()=> {
        setTimeout(() => {
            fetch('http://localhost:8000/item')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data');
                }
                return res.json()
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=> {
                setError(err.message);
                setIsPending(false);
            })
        },1000);
        
    },[]);
}

export default useFetch;
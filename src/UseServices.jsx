import { useEffect, useState } from "react";


const UseServices = () => {
    const [assignments,setAssignment]=useState([]);
    
    useEffect(()=>{
        fetch('https://online-group-study-server-rust.vercel.app/assignments')
        .then(res=>res.json())
        .then( data =>setAssignment(data))
   
    },[])
    return assignments;
};

export default UseServices;
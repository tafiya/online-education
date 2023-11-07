import { useEffect, useState } from "react";


const UseServices = () => {
    const [assignments,setAssignment]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/assignments')
        .then(res=>res.json())
        .then( data =>setAssignment(data))
   
    },[])
    return assignments;
};

export default UseServices;
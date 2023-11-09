import axios from "axios";
import { useEffect, useState } from "react";
import EachPending from "./EachPending";


const AllSubmittedAssignment = () => {
    const [allSubmitted,setAllSubmitted]=useState([]);
    const url=`https://online-group-study-server-rust.vercel.app/submitAssignment?status=pending`;
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setAllSubmitted(res.data);
        })
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>setBookings(data))
    },[url]);
    console.log('all pending dt',allSubmitted);
    const handleConfirm =id=>{
        console.log("confirm hits");
        fetch(`https://online-group-study-server-rust.vercel.app/submitAssignment/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then( res=> res.json())
        .then( data =>{
            console.log(data)
            if(data.modifiedCount >0 )
            {
                const remaining= allSubmitted.filter(booking=> booking._id !== id);
                const updated =allSubmitted.find(booking=>booking._id === id);
                updated.status ='confirm';
                const newBookings =[updated,...remaining];
                setAllSubmitted(newBookings);

            }
        })
    }
    return (
        <div  className=' max-w-7xl mx-auto'>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl text-black font-semibold">
        <th>Assignment Name</th>
        <th>Name</th>
        <th>Marks</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
      
    {
        allSubmitted.map(booking=><EachPending  key={booking._id} booking={booking}  handleConfirm={handleConfirm}></EachPending>
        )
      }
    </tbody>
 
    
  </table>
</div>
            
        </div>
    );
};

export default AllSubmittedAssignment;
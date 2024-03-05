import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import MyEachAssignment from "./MyEachAssignment";


const MyAssignments = () => {
    const {user}=useContext(AuthContext);
    const [myAssignments,setMyAssignments]=useState([]);
    //${user?.email}
   
    const url=`https://online-group-study-server-rust.vercel.app/submitAssignment?email=${user?.email}`;
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setMyAssignments(res.data);
        })
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>setBookings(data))
    },[url]);
    return (
        <div  className=' max-w-7xl mx-auto -mt-6'>
            <h2 className="text-center text-4xl font-bold mb-12 bg-[#A5DD9B] p-4 rounded-lg  "> My Assignments</h2>
          
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    myAssignments.map(myAssignment=><MyEachAssignment key={myAssignment._id} myAssignment={myAssignment}></MyEachAssignment>)
                }

            </div>
            
        </div>
    );
};

export default MyAssignments;
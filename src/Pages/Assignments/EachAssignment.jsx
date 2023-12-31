
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const EachAssignment = ({assignment,handleDelete}) => {
    const{_id,title,photo,description,level,marks,
        creatorEmail}=assignment;
        const {user}=useContext(AuthContext);
     
     
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <button  onClick={()=>handleDelete(_id,creatorEmail)}  className=" text-xl font-bold hover:text-red-600 text-end p-2">X</button>
        <figure className="px-10 pt-10 h-1/2">
          <img src={photo} alt="service picture" className="rounded-xl" />
        </figure>
        <div className="card-body h-1/2  ">
          <h2 className="card-title text-2xl font-bold">{title} <span className="text-sm border p-2 bg-green-600 text-white rounded-xl" > {level} </span> </h2>
          <div className=' flex flex-col my-4'>
          <p className=' text-sm font-base'>{description}</p>
          <p>Marks:{marks}</p>
         
          <div className=" mt-4 flex justify-between">
          <Link to={`/viewDetails/${_id}`}><button className=" border border-yellow-500 text-orange-400 p-2 rounded-lg hover:bg-yellow-500 hover:text-white font-semibold ">View</button></Link>
          <Link to={`/updateAssignments/${_id}`}><button className=" border border-yellow-500 text-orange-400 p-2 rounded-lg hover:bg-yellow-500 hover:text-white font-semibold ">Update</button></Link>

          </div>
          </div>
         
          
        </div>
      </div>
    );
};

export default EachAssignment;
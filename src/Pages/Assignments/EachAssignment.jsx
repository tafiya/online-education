import { Link } from "react-router-dom";


const EachAssignment = ({assignment}) => {
    const{_id,title,photo,description,level,marks,
        creatorEmail}=assignment;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
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
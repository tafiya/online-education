import { Link, useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import lock from '../assets/image/sorrylocked.png'


const UpdatePage = () => {
    const {user}=useContext(AuthContext);
    console.log(user.email)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const updateAssignments=useLoaderData();
    const {_id,title,level,marks,description,date,photo,creatorEmail}=updateAssignments;
    console.log(updateAssignments);
    const handleSubmit=e=>{
        e.preventDefault();
        const form =e.target;
        const title=form.title.value;
        const level =form.level.value;
        const marks=form.marks.value;
        const description=form.description.value;
        const date=startDate;
        const photo=form.photo.value;
        const creatorEmail=form.creatorEmail.value

        const addAssignment ={title,level,marks,description,date,photo,creatorEmail}
      console.log('after update',addAssignment)
      fetch(`https://online-group-study-server-rust.vercel.app/assignments/${_id}`,{
        method:"PUT",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(addAssignment)
      })
      .then(res=>res.json())
      .then(data=>
        {
            Swal.fire(
                'Good job!',
                'Assignment is updated',
                'success'
              )
           
              console.log(data)
              form.reset();
              navigate( '/assignments');
        }
        )

    }
    return (
        <div>
            {
                user.email===creatorEmail?     <div className=" bg-[#F4F3F0] p-24">
                <h2 className=" text-3xl font-extrabold text-center my-12">Update an Assignment</h2>
                <form onSubmit={handleSubmit}  >
                    {/* onSubmit={handleSubmit} */}
                {/* coffee row */}
                <div className="md:flex mb-4">
                   <div className="form-control md:w-1/2 ">
                       <label className="label">
                           <span className="label-text">Assignment Title</span>
                       </label>
                       <label className="input-group">
                           <input type="text" placeholder="Assignment Title"
                           defaultValue={title} name="title" className="input input-bordered w-full "/>
                       </label>
                   </div>
                   <div className="form-control ml-4  md:w-1/2">
                       <label className="label">
                           <span className="label-text">Level</span>
                       </label>
                       <label className="input-group">
                       <select  className="input input-bordered w-full" defaultValue={level} name="level" id="cars">
                           <option value="Hard">Hard</option>
                           <option value="Medium">Medium</option>
                           <option value="Easy">Easy</option>
                    
                       </select>
                       </label>
                   </div>
                </div>
                 {/*Marks row */}
                 <div className="md:flex mb-4">
                   <div className="form-control md:w-1/2 ">
                       <label className="label">
                           <span className="label-text">Marks</span>
                       </label>
                       <label className="input-group">
                           <input type="text" placeholder="Marks" defaultValue={marks} name="marks" className="input input-bordered w-full "/>
                       </label>
                   </div>
                   <div className="form-control ml-4  md:w-1/2">
                       <label className="label">
                           <span className="label-text">Description</span>
                       </label>
                       <label className="input-group">
                           <input type="text" placeholder="Short description" defaultValue={description} name="description" className="input input-bordered w-full"/>
                       </label>
                   </div>
                </div>
                {/* new row */}
                <div className="md:flex mb-4">
                   <div className="form-control md:w-1/2 ">
                       <label className="label">
                       <span className="label-text">Photo url</span>
                       </label>
                       <label className="input-group">
                           <input type="text" placeholder="Photo url" defaultValue={photo} name="photo" className="input input-bordered w-full"/>
                       </label>
                   </div>
                   <div className="form-control ml-4  md:w-1/2">
                       <label className="label">
                           <span className="label-text">Creator Email</span>
                       </label>
                       <label className="input-group">
                           <input type="email" placeholder="Creator Email" name="creatorEmail" defaultValue={creatorEmail} className="input input-bordered w-full"/>
                       </label>
                   </div>
                </div>
                
                 {/* bandName  row */}
                 <div className="md:flex mb-4">
                   <div className="form-control md:w-1/2 ">
                       <label className="label">
                           <span className="label-text">Due Date</span>
                       </label>
                       <label className="input-group">
                       <DatePicker className="input input-bordered w-full"  selected={startDate} onChange={(date) => setStartDate(date)} />
                       
                       </label>
                   </div>
                
                </div>
                
                <input type="submit" value="Update Assignment" className="btn btn-warning btn-block" />
                
                
                
                </form>
                
                </div>:
                <div className=" flex flex-col lg:flex-row"> 
                    <img src={lock} alt="" />
                    <h2 className=" lg:mt-48 text-center items-center justify-center text-5xl">
                    Sorry, You are not the Creator<span className="text-base text-green-500"><Link to="/assignments">Go back</Link></span> </h2></div>
                    
            }
   

</div>
    );
};

export default UpdatePage;
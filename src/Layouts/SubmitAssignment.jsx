import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";


const SubmitAssignment = () => {
    const {user}=useContext(AuthContext);
    const email=user.email;
    const updateAssignments=useLoaderData();
    const {_id,title,level,marks,description,date,photo,creatorEmail}=updateAssignments;

    const handleAssignment=e=>{
        e.preventDefault();
        const form =e.target;
        const file=form.file.value;
        const note =form.note.value;
        const name=form.name.value;
        const status="pending";
        const submitAssignment={file,note,name,title,level,description,photo,email,status,marks}
        
        console.log(submitAssignment);
        fetch('http://localhost:5000/submitAssignment',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(submitAssignment)
          })
          .then(res=>res.json())
          .then(data=>
            {
                console.log()
                 Swal.fire(
                    'Good job!',
                    'Assignment is created!',
                    'success'
                  )
                  console.log(data)
                  form.reset();
            }
            )
    }
    return (
        <div>
          
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleAssignment} className="card-body">
        <h2 className=" text-center font-bold text-xl text-warning">Submit your Assignment</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Your name:</span>
          </label>
          <input type="text" placeholder="Name" required name="name" className="input input-bordered w-full "/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Select a file:</span>
          </label>
          <input type="text" placeholder="File" required name="file" className="input input-bordered w-full "/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Make A note:</span>
          </label>
         
          <textarea type="text" name="note" required className="textarea border-warning textarea-bordered" placeholder="Make a note"></textarea>
    
        </div>
        <div className="form-control mt-6">
          <button className="btn  btn-warning">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SubmitAssignment;
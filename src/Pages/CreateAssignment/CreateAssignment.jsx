import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
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
        console.log(addAssignment);
        fetch('https://online-group-study-server-rust.vercel.app/createAssignment',{
            method:"POST",
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
                     <div className=" bg-[#F4F3F0] px-24 py-8">
        <h2 className=" text-3xl font-extrabold text-center my-12">Create an Assignment</h2>
        <form  onSubmit={handleSubmit}>
            {/* coffee row */}
            <div className="md:flex mb-4">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Assignment Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Assignment Title" name="title" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Level</span>
                    </label>
                    <label className="input-group">
                    <select  className="input input-bordered w-full" name="level" id="cars">
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
                        <input type="text" placeholder="Marks" name="marks" className="input input-bordered w-full "/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Short description" name="description" className="input input-bordered w-full"/>
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
                        <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full"/>
                    </label>
                </div>
                <div className="form-control ml-4  md:w-1/2">
                    <label className="label">
                        <span className="label-text">Creator Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" placeholder="Creator Email" name="creatorEmail" className="input input-bordered w-full"/>
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
                    <DatePicker className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    
                    </label>
                </div>
            
            </div>
           
            <input type="submit" value="Add Assignment" className="btn btn-warning btn-block" />
           
          
    
        </form>
    
    </div>
            
        </div>
    );
};

export default CreateAssignment;
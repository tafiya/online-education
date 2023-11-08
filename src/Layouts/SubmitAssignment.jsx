import Swal from "sweetalert2";


const SubmitAssignment = () => {
    const handleAssignment=e=>{
        e.preventDefault();
        const form =e.target;
        const file=form.file.value;
        const note =form.note.value;
        const submitAssignment={file,note}
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
            <span className="label-text font-medium">Select a file:</span>
          </label>
          <input type="file" name="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Make A note:</span>
          </label>
         
          <textarea type="text" name="note" className="textarea border-warning textarea-bordered" placeholder="Make a note"></textarea>
    
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


const MyEachAssignment = ({myAssignment}) => {
    const {title,photo,status}=myAssignment
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="w-1/3">
            <figure><img src={photo} alt="Movie"/></figure>
            </div>
  
  <div className="card-body w-2/3">
    <h2 className="card-title">{title}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">{status}</button>
    </div>
  </div>
</div>
    );
};

export default MyEachAssignment;
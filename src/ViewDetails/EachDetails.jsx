import { Link } from "react-router-dom";


const EachDetails = ({NewItem}) => {
    const{_id,title,photo,description,level,marks,
        creatorEmail}=NewItem;
    return (
        <div>
        <div className="my-14 max-w-7xl mx-auto">
   <div className="flex  flex-col  bg-white  text-gray-700 ">
   <div className="  relative rounded-xl bg-clip-border text-gray-700 ">
   <div className=''>
   <img className='rounded-xl  w-full h-96  'src={photo} alt="ui/ux review check"/>
   </div>
 </div>
 <div className="p-6 rounded-b-md">
   <h4 className=" mt-6 block font-sans text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
   </h4>
   <p className="my-5 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
    {description}
   </p>
   <p className="text-lg text-slate-500 mb-6">{marks}</p>
   <p className="text-lg text-slate-500 mb-6">{level}</p>
 
   {/* <button onClick={handleCart} className=" w-full btn btn-active text-white bg-red-400">Add to cart</button> */}
   <Link to="/submitAssignment"><button className="btn btn-primary" > Make Assignment</button></Link>
       
 
 </div>


   </div>

   </div>
   

       
   </div>
    );
};

export default EachDetails;
import UseServices from "../../UseServices";
import EachAssignment from "../Assignments/EachAssignment";


const Feature = () => {
    const assignments=UseServices()

    
    return (
        <div className=' max-w-7xl mx-auto'>
            <div data-aos="fade-down" data-aos-duration="1000" className=" overflow-x:hidden  text-center mt-24">
                
                <h1 className=" dark::text-red-600 text-5xl font-bold">Feature</h1>
                <p  className=" text-base font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
   
            <div data-aos="fade-down" data-aos-duration="1000" className=" overflow-x:hidden grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 my-24">
                {
                    assignments.slice(0,3).map(assignment=><EachAssignment key={assignment._id} assignment={assignment} ></EachAssignment>)
                }
                
            </div>
            
        </div>
    );
};

export default Feature;
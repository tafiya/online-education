
import UseServices from "../../UseServices";
import EachAssignment from "./EachAssignment";
import banner from '../../assets/image/assigntBanner.jpg'


const Assignments = () => {
    const assignments =UseServices()
//     const [allAssignments,setAllAssignment]=useState([])
//    // setAllAssignment(assignments)

//     useEffect(()=>{
//         setAllAssignment(assignments);
//         console.log(allAssignments)

//     },[])
   
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <img src={banner} className="w-full" alt="" />
            </div>
            <div className="text-center mt-8 flex  max-w-7xl mx-auto">
                <h2 className=" font-bold text-2xl mr-2">Sort by:</h2>
                <select  className="input input-bordered text-lg font-semibold text-yellow-500 " name="level" id="cars">
                        <option value="Hard">Hard</option>
                        <option value="Medium">Medium</option>
                        <option value="Easy">Easy</option>
                 
                    </select>

            </div>
            <div className=" max-w-7xl mx-auto">

              
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 my-24">
                {
                    assignments.map(assignment=><EachAssignment key={assignment._id} assignment={assignment}></EachAssignment>
                   )
                }
                
            </div>
   
            
        </div>
        </div>
        
    );
};

export default Assignments;
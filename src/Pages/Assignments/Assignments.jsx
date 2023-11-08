
import UseServices from "../../UseServices";
import EachAssignment from "./EachAssignment";
import banner from '../../assets/image/assigntBanner.jpg'
import { useEffect, useState } from "react";



const Assignments = () => {
    const allData= UseServices()
    const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');

  // Fetch data from an API or any source
  useEffect(() => {
    // Replace this with your data fetching logic (e.g., API call)
    // Example: Fetching all data
    const fetchData = async () => {
      // Simulated fetched data
     
      setData(allData);
      setFilteredData(allData); // Initialize filtered data with all data
    };

    fetchData();
  }, [allData]);

  // Function to filter data based on the selected level
  const filterData = () => {
    if (selectedLevel === '') {
      setFilteredData(data); // If no level selected, show all data
    } else {
      const filtered = data.filter(item => item.level === selectedLevel);
      setFilteredData(filtered); // Show data based on the selected level
    }
  };

  // Event handler for level selection change
  const handleLevelChange = event => {
    setSelectedLevel(event.target.value);
  };

  useEffect(() => {
    filterData(); // Call filter function when selected level changes
  }, [selectedLevel, data]);
   
   
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <img src={banner} className="w-full" alt="" />
            </div>
            <div className="text-center mt-8 flex  max-w-7xl mx-auto">
                <h2 className=" font-bold text-2xl mr-2">Sort by:</h2>
                <select value={selectedLevel}onChange={handleLevelChange}  className="input input-bordered text-lg font-semibold text-yellow-500 " name="level" id="cars">
                        
                        <option value="Hard">Hard</option>
                        <option value="Medium">Medium</option>
                        <option value="Easy">Easy</option>
                 
                    </select>

            </div>
            <div className=" max-w-7xl mx-auto">

              
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 my-24">
                {
                    filteredData.map(assignment=><EachAssignment key={assignment._id} assignment={assignment}></EachAssignment>
                   )
                }
                
            </div>
   
            
        </div>
        </div>
        
    );
};

export default Assignments;
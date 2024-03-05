
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdAssignment, MdAssignmentAdd ,MdAssignmentTurnedIn,MdOutlineAssignmentInd} from "react-icons/md";

const Dashboard = () => {

    const dashboard=<>
   
    <li><NavLink className=" text-yellow-500 font-bold text-lg"  to='myAssignments'>My Assignments</NavLink></li>
    <li><NavLink className=" text-yellow-500 font-bold text-lg"  to='createAssignments'>Create Assignments</NavLink></li>
    <li><NavLink className=" text-yellow-500 font-bold text-lg"  to='AllSubmittedAssignments'>Submitted Assignments</NavLink></li>
    </>

    return (
      <div>

        <div className="container py-8">
          {/* dashboard side bar */}

          <div className="grid grid-cols-1   lg:grid-cols-[250px_auto] gap-6">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 rounded-box w-72">
                {dashboard}
              </ul>
            </div>
            <aside className="hidden mt-12 lg:block py-8 px-6 bg-[#F2C18D] rounded-lg h-[calc(100vh-147px)]">
              <h4 className="text-[18px] uppercase font-medium mb-4">Dashboard</h4>
              <div className="space-y-1">
                <Link href='/dashboard/home' className="flex justify-between items-center py-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <MdDashboard className="text-xl" />
                    Dashboard
                  </div>
                  <FaArrowRight />
                </Link>
                <Link to='myAssignments' className="flex justify-between items-center py-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <MdOutlineAssignmentInd className="text-xl" /> My Assignments
                  </div>
                  <FaArrowRight />
                </Link>
                <Link to='createAssignments' className="flex justify-between items-center py-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <MdAssignmentAdd className="text-xl" /> Create Assignments
                  </div>
                  <FaArrowRight />
                </Link>
                <Link to='AllSubmittedAssignments' className="flex justify-between items-center py-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <MdAssignmentTurnedIn className="text-xl" /> Submitted Assignments
                  </div>
                  <FaArrowRight />
                </Link>
              </div>

              <h4 className="text-[18px] uppercase font-medium mb-4 mt-8">Menu</h4>
              <div className="space-y-1">
                <Link to='/' className="flex justify-between items-center py-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <IoHome className="text-xl" />
                    Home
                  </div>
                  <FaArrowRight />
                </Link>
                <Link to="/about" className="flex justify-between items-center py-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <FcAbout className="text-xl" />
                    About
                  </div>
                  <FaArrowRight />
                </Link>
                <Link to="/assignments" className="flex justify-between items-center py-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <MdAssignment className="text-xl" />
                    Assignment
                  </div>
                  <FaArrowRight />
                </Link>
              </div>
            </aside>
            {/* dashboard content */}
            <div className="flex-1 p-8">

              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
        
   
    );
};

export default Dashboard;


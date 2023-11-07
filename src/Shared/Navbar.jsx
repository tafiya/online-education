//import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/image/logo.jpg'
import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';
import profile from '../assets/image/istockphoto-1495088043-612x612.jpg'


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
      logOut()
      .then(()=>{})
      .catch(error=>console.log(error))
    }
      const navItems=<>
      <li><NavLink  className=" text-yellow-500 font-bold text-lg" to="/">Home</NavLink></li>
      <li><NavLink className=" text-yellow-500 font-bold text-lg" to="/about">About</NavLink></li>
      <li><NavLink className=" text-yellow-500 font-bold text-lg" to="/assignments">Assignments</NavLink></li>
      {
        user?.email?<>
   
        <li><NavLink className=" text-yellow-500 font-bold text-lg"  to='myAssignments'>My Assignments</NavLink></li>
        <li><NavLink className=" text-yellow-500 font-bold text-lg"  to='createAssignments'>Create Assignments</NavLink></li>
        <li><NavLink className=" text-yellow-500 font-bold text-lg"  to='myAssignments'>Submitted Assignments</NavLink></li>
        </>:<></>
      }
      
      
     
      </>
    return (
        <div className="navbar bg-[#FFFFFF30] h-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 rounded-box w-52">
            {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} className=' w-28 h-14' alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
       {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        {
        user? <div className="flex flex-row items-center text-yellow-500 lg:text-lg text-sm  lg:gap-2 lg:font-medium "><h2>{user.displayName?user.displayName:'no name'}</h2> <button > <img src={user.photoURL? user.photoURL:profile
        } alt="" className=" border rounded-full h-12 w-12" /></button>  <button onClick={handleLogOut} className="   text-white  btn btn-outline btn-warning">LogOut</button></div> :<Link to='/login'><button className=" btn btn-outline btn-warning text-white">Login</button></Link>
    
      }
        </div>
      </div>
    );
};

export default Navbar;
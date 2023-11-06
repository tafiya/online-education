import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/image/login.svg';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import {   signInWithPopup } from "firebase/auth";






const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const {signInUser} = useContext(AuthContext);
    const [invalid, setInvalid] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)
        setInvalid('');
        signInUser(email, password).then(result => {
            new Swal("login is successfully done...!");
            console.log('after login ',result)
            e.target.reset();
            navigate(location ?. state ? location.state : '/');
           
        }).catch(error => setInvalid(error.message))
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider).then(result => {
            new Swal("login is successfully done...!");
            console.log('after login ',result)
            navigate(location ?. state ? location.state : '/');
        }).catch(error => {
          console.log(error);
         
        })
    
        //    navigate(location?.state? location?.state:'/');
        //    axios
        //    axios.post('http://localhost:5200/jwt',user,{withCredentials:true})
        //    .then(res=>
        //      {console.log(res.data)
        //       if(res.data.success){
        //        navigate(location?.state? location?.state:'/');
        //       }})
        //    .catch(error=>console.log(error))
 
     
 
     }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content gap-6 flex-col lg:flex-row">
          <div className="mr-12 w-1/2 ">
          <img src={login} alt="" />
          </div>
          <div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold p-8 ">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
             <input type="submit" value="Login" className='btn btn-primary' />
              </div>
            </form>
            <p className='p-4 ml-4'>New to cars doctors? <Link className=' text-xl font-bold text-orange-600 ' to="/signup">SignUp</Link></p>

          </div>
          <div className=" bg-base-200  my-12 w-full mx-auto">
            <button onClick={handleGoogleSignIn} className=' flex items-center gap-2 btn btn-outline w-full'>
            <FcGoogle></FcGoogle>
            Login with Google 
            </button>
            </div>

          </div>
          
         
        </div>
        
      </div>
    );
};

export default Login;
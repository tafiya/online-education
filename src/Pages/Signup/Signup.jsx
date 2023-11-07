
import { Link, useNavigate } from "react-router-dom";
import login from '../../assets/image/login.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Signup = () => {
  const {createUser}=useContext(AuthContext);
  const [registerError,setRegister]=useState('');
  const [success,setSuccess]=useState('');
  const navigate = useNavigate();


    const handleSignUp=e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        const name= form.get('name');
        const photo= form.get('photo');
        const email= form.get('email');
        const password=form.get('password');
        console.log(name,photo,email,password);
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password))
        {
          setRegister("Please provide a valid password .(Minimum 6 characters,one Uppercase letter,one special letter)")
            return;

        }
        setRegister('');
        setSuccess('');
        
        createUser(email,password)
        .then(result=>
          {
            console.log(result.user)
            new Swal.fire('Registration is successfully done...!')
           
            e.target.reset();
            navigate(location ?. state ? location.state : '/');

          }
          )
        .catch(error=>{
          setRegister(error.message);
        })

       

    }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content gap-6 flex-col lg:flex-row">
          <div className="mr-12 w-1/2 ">
          <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold p-8 ">SignUp</h1>
            <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required="required"/>
            </div>

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
             <input type="submit" value="SignUp" className='btn btn-primary' />
              </div>
            </form>
            {
                registerError && <div>
                    <p className=" text-red-600 font-bold">{registerError}</p>
                </div>
            }
            <p className='p-4 ml-4'>Already have an Account? <Link className=' text-xl font-bold text-orange-600 ' to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;
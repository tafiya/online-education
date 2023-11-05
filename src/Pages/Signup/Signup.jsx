
import { Link } from "react-router-dom";
import login from '../../assets/image/login.svg'


const Signup = () => {

   // const {createUser}=useContext(AuthContext);
    const handleSignUp=e=>{
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        // createUser(email,password)
        // .then(result=>{
        //     const user=result.user;
        //     console.log(user);
        // })
        // .catch(error=>console.log(error))
        console.log(name,email,password)

       

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
            <p className='p-4 ml-4'>Already have an Account? <Link className=' text-xl font-bold text-orange-600 ' to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import UpdatePage from "../Layouts/UpdatePage";
import ViewDetails from "../ViewDetails/ViewDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import SubmitAssignment from "../Layouts/SubmitAssignment";
import AllSubmittedAssignment from "../Pages/AllSubmittedAssignment.jsx/AllSubmittedAssignment";
import About from "../Pages/About/About";
import Dashboard from "../Layouts/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signUp',
            element:<Signup></Signup>,
        },
        {
          path:"assignments",
          element:<Assignments></Assignments>
        },
      
      
        {
          path:"/updateAssignments/:id",
          element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
          loader:({params})=>fetch(`https://online-group-study-server-rust.vercel.app/assignments/${params.id}`)
        },
        {
          path:"/viewDetails/:id",
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader:()=>fetch('https://online-group-study-server-rust.vercel.app/assignments')
        },
     
   
        {
          path:"about",
          element:<About></About>
        }
      

      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:"myAssignments",
          element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
        },
        {

          path:'AllSubmittedAssignments',
          element:<PrivateRoute><AllSubmittedAssignment></AllSubmittedAssignment></PrivateRoute>,
         

        },
        {
          path:'submitAssignment/:id',
          element:<PrivateRoute><SubmitAssignment></SubmitAssignment></PrivateRoute>,
          loader:({params})=>fetch(`https://online-group-study-server-rust.vercel.app/assignments/${params.id}`)
        },
        {
          path:"createAssignments",
          element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>

        },

      

      ]
    }
  ]);
  export default router;
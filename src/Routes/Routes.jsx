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
import PreviewPage from "../Pages/AllSubmittedAssignment.jsx/PreviewPage";

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
          path:"createAssignments",
          element:<PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>

        },
        {
          path:"myAssignments",
          element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
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
          path:'/submitAssignment/:id',
          element:<PrivateRoute><SubmitAssignment></SubmitAssignment></PrivateRoute>,
          loader:({params})=>fetch(`https://online-group-study-server-rust.vercel.app/assignments/${params.id}`)
        },
        {

          path:'AllSubmittedAssignments',
          element:<PrivateRoute><AllSubmittedAssignment></AllSubmittedAssignment></PrivateRoute>,
         

        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:"/preview",
          element:<PrivateRoute><PreviewPage></PreviewPage></PrivateRoute>,
          loader:({params})=>fetch(`https://online-group-study-server-rust.vercel.app/submitAssignment/${params.id}`)

        }

      ]
    },
  ]);
  export default router;
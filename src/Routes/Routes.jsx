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
          loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        {
          path:"/viewDetails/:id",
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader:()=>fetch('http://localhost:5000/assignments')
        },
        {
          path:'/submitAssignment/:id',
          element:<SubmitAssignment></SubmitAssignment>,
          loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        {

          path:'AllSubmittedAssignments',
          element:<AllSubmittedAssignment></AllSubmittedAssignment>

        }

      ]
    },
  ]);
  export default router;
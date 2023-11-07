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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element:<CreateAssignment></CreateAssignment>

        },
        {
          path:"myAssignments",
          element:<MyAssignments></MyAssignments>
        },
        {
          path:"/updateAssignments/:id",
          element:<UpdatePage></UpdatePage>,
          loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        {
          path:"/viewDetails/:id",
          element:<ViewDetails></ViewDetails>,
          loader:()=>fetch('http://localhost:5000/assignments')
        }

      ]
    },
  ]);
  export default router;
import Body from "./Components/Body";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import { NavLink, RouterProvider, createBrowserRouter} from "react-router-dom"
import Signup from "./Components/Signup";

function App() {


  let routerOfElement = createBrowserRouter([
    {
        path: "",
        element: <Body/>,
        children:[
          {
            path: "/",
            element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
      },
      
          {
              path: "/browse",
              element: <Browse />
          }
        ],
        errorElement:<>
        <div className="flex items-center flex-col mt-40 justify-center">

        <h3 className="text-center">Something Went Wrong</h3>
        <br/>
        <NavLink to={"/"}><button className="bg-green-500 px-3 rounded-md text-white" >Home</button></NavLink>
        </div>
        </>
    },

    
])
  return (
    <>
    
    <RouterProvider router={routerOfElement}/>
  
    </>
  );
}

export default App;

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
        <h3 className="text-center">Something Went Wrong</h3>
        <NavLink to={"/"}><button className="bg-green-500 px-3 rounded-md" >Home</button></NavLink>
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

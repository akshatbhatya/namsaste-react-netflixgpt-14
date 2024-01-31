import Body from "./Components/Body";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import {Navigate, RouterProvider, createBrowserRouter, useNavigate} from "react-router-dom"
import Signup from "./Components/Signup";
import {useDispatch} from "react-redux"




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
        ]
    },

    
])


  return (
    <>
    
    <RouterProvider router={routerOfElement}/>
  
    </>
  );
}

export default App;

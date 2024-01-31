import Body from "./Components/Body";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import {RouterProvider, createBrowserRouter, useNavigate} from "react-router-dom"
import Signup from "./Components/Signup";
import {useDispatch} from "react-redux"

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { useEffect } from "react";

import {addUser,removeUser} from "./Store/MovieSlice"


function App() {

  let dispatch=useDispatch()


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

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid ,email,displayName}=user;

      dispatch(addUser({uid:uid,email:email,displayName:displayName}))

      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser())
    }
  });
},[])
  return (
    <>
    
    <RouterProvider router={routerOfElement}/>
  
    </>
  );
}

export default App;

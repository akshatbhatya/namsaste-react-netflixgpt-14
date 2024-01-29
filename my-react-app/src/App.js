import Body from "./Components/Body";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import {RouterProvider, createBrowserRouter} from "react-router-dom"

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

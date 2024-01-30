import Body from "./Components/Body";
import Browse from "./Components/Browse";
import Login from "./Components/Login";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Signup from "./Components/Signup";
import {Provider} from "react-redux"
import MovieStore from "./Store/MovieStore";

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
    <Provider store={MovieStore}>
    <RouterProvider router={routerOfElement}/>
    </Provider>
    </>
  );
}

export default App;

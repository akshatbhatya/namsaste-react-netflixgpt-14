import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from './Browse'

function Body() {


    let routerOfElement = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },

        {
            path: "/browse",
            element: <Browse />
        }
    ])
    return (
        <>
            <RouterProvider router={routerOfElement} />
        </>
    )
}

export default Body

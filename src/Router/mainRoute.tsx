import React from "react"
import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Block/Layout"
import View from "../Pages/View"
import Error from "../Error/Error"
import SignUp from "../Pages/Register/SignUp"
import SignIn from "../Pages/Register/SignIn"

export const mainRoute= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true,
            element: <View/>
            },
            {path: "sign up",
            element: <SignUp/>
            },
            {path: "sign in",
            element: <SignIn/>
            },
            {path: "/",
            element: <Error/>
            }
        ]
    }
])
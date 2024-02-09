import React from 'react'
import Login from './Login'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import Browser from './Browser';



const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        },
    ]);

  return (
    <div>
        <RouterProvider router={appRouter} future={{ v7_startTransition: true }} ></RouterProvider>
    </div>
  )
}

export default Body;
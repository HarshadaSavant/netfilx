import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import Browser from './Browser';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth'; 
import { useDispatch } from 'react-redux';
import { addUserAction, removeUserAction } from '../utils/userSlice';
import Error from './Error';




const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        },
        {
          path:"/error",
          element:<Error/>
      },
    ]);

    

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUserAction({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          // ...
        } else {
            dispatch(removeUserAction());
          // User is signed out
          // ...
        }
      });
    }, []);


  return (
    <div>
        <RouterProvider router={appRouter} future={{ v7_startTransition: true }} ></RouterProvider>
    </div>
  )
}

export default Body;
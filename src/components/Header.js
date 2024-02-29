import React, {useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'; 
import { addUserAction, removeUserAction } from '../utils/userSlice';
import { LOGO } from '../utils/Constant';


const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const user = useSelector(store=>store.user);
  
const handleSignOut = () =>
{
   
  signOut(auth).then(() => {
    navigate("/");
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
}

useEffect(() => {
 const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUserAction({uid:uid,email:email,displayName:displayName,photoURL:photoURL})
      );
      navigate("/browser");
    } else {
        dispatch(removeUserAction());
        navigate("/")
      // User is signed out
    }
  });
  //unsubscribe called when components is unmount
  return() => unsubscribe();

}, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div >
        <img className="w-44" src={LOGO}
        alt='logo'></img></div>
        {user &&(
        <div className='flex p-2 m-2'>
        <img className="w-full h-10" src={user.photoURL}
        alt='usericon'></img>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button></div>
        )}
    </div>
  )
}

export default Header
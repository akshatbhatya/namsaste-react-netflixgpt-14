import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Store/userSlice';





const Header = () => {
    let data = useSelector(state => state.user) || {}
    let getLocationOfPage = useLocation();
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let HandleSignOut = () => {


        signOut(auth).then(() => {
            // navigate("/")
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;

                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")

                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser())
                navigate("/")
            }

            return () => {
                unsubscribe()

            }
        });
    }, [])


    let isSignup = getLocationOfPage.pathname === "/signup";
    let browsePage = getLocationOfPage.pathname === "/browse";
    return (
        <div className='flex justify-between w-[1400px] mx-auto absolute mt-10 left-[50px]'>
            <NavLink to={"/"}><img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-[160px] h-[70px]" alt="Logo" /></NavLink>
            <nav>

                {
                    isSignup || browsePage ? null : (<NavLink to={"/signup"}><button className="list-none bg-red-600 px-3 py-2 text-white rounded-md">sign up</button></NavLink>)
                }
                {
                    browsePage && (
                        <h2>{data.displayName}</h2>


                    )
                }
                {
                    browsePage && (
                        <img src={data.photoURL} alt="" />

                    )
                }
                {
                    browsePage && (<NavLink ><button className="list-none bg-red-600 px-3 py-2 text-white rounded-md" onClick={HandleSignOut}>sign Out</button></NavLink>)
                }


            </nav>

        </div>
    )
}

export default Header;



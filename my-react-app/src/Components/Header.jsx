import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';


const Header = () => {
    let getLocationOfPage = useLocation();

    let isSignup = getLocationOfPage.pathname === "/signup";
    return (
        <div className='flex justify-between w-[1200px] mx-auto absolute mt-10 left-[180px]'>
            <NavLink to={"/"}><img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-[160px] h-[70px]" alt="Logo" /></NavLink>
            <nav>

                {
                    !isSignup && (<NavLink to={"/signup"}><button className="list-none bg-red-600 px-3 py-2 text-white rounded-md">sign up</button></NavLink>)
                }

            </nav>

        </div>
    )
}

export default Header;
import { NavLink } from "react-router-dom";

let Login=()=>{
    return (
        <>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-[140px] h-[40px]" alt="Logo" />
        <nav>
            <NavLink><button className="list-none bg-red-600 px-3 py-2">sign up</button></NavLink>
        </nav>
        </>
    )
}

export default Login;
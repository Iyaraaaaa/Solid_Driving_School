import React from 'react'
import SideNav from "./SideNav.jsx";
import {Outlet} from "react-router-dom";

const Admin = () => {
    return (
        <div className="flex">
            <div className='fixed'>
                <SideNav/>
            </div>
            <div className="w-full ml-[256px]">
                <Outlet/>
            </div>
        </div>
    )
}
export default Admin

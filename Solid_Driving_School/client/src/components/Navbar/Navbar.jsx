import React, {useContext, useEffect, useState} from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { UserContext } from '../../App';
import {logout} from "../../hooks/Logout.js";
import { Button } from '@mui/material';
import Dialog from "@mui/material/Dialog";

// Navigation Links Array
export const NavLinks = [
  { id: '1', name: 'HOME', link: '/home' },
  { id: '2', name: 'ABOUT', link: '/about1' },
  { id: '3', name: 'STORE', link: '/storepage' },
  { id: '4', name: 'INFORMATION', link: '/information' },
  { id: '5', name: 'BOOKING', link: '/booking' },
  { id: '6', name: 'CONTACT US', link: '/contactus' },
];


//logout


const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [open, setOpen] = useState(false);
  let {user} = useContext(UserContext);

  const loggeduser = JSON.parse(localStorage.getItem("auth_user"));

  useEffect(() => {
      const hasUserRole = loggeduser?.role?.name === "ADMIN" || loggeduser?.role?.name === "SUPER_ADMIN";
      setAdmin(hasUserRole);
  },[]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    logout();
    setAdmin(false);
    user = null;
    handleClose();
    window.location.reload();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  }

  return (
      <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 h-20 z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/home">
            <div className="text-3xl font-bold font-serif">SOLID</div>
          </Link>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex gap-8">
              {NavLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                        className="inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                        to={data.link}
                    >
                      {data.name}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Icons for Theme Toggle and User Login */}
          <div className="flex items-center space-x-8">
            {/* Theme Toggle */}
            <button
                className="text-2xl cursor-pointer"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <BiSolidSun/> : <BiSolidMoon/>}
            </button>

            {/* User Login Icon */}
            {user ?
                (<div className='text-black mt-1'>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="size-6 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="dropdown-content menu bg-base-100 dark:bg-black dark:text-white rounded-box z-[1] w-52 p-2 shadow">
                            <li><Link to="profile">
                                <div>Profile</div>
                            </Link>
                            </li>
                            {admin ? <li><Link to="admin"><div>Admin</div></Link></li>:<></>}
                            <li>
                                <div onClick={handleClickOpen}>Logout</div>
                            </li>
                        </ul>
                    </div>

                </div>) :
                (
                <Link to="/login" className="text-2xl">
                    {theme === 'dark' ? <FaRegUser/> : <FaUser/>}
                </Link>
                )
            }


              {/* Mobile Menu Toggle Icon */}
              <button onClick={toggleMenu} className="md:hidden text-2xl">
              {showMenu ? <HiMenuAlt1/> : <HiMenuAlt3/>}
            </button>
          </div>
        </div>

        {/*LogOut Message*/}
        <Dialog 
        
        open={open}
        onClose={handleClose}
        >
          <div className="w-[35rem] h-[10rem] px-6 py-4  bg-white rounded-md flex flex-col justify-between items-start ">
             
                  <span className="text-2xl font-bold">Logout</span>

                  <p >Are you sure to logout from this account?</p>

                  <div className="w-full flex justify-end items-center gap-4 ">
                    <Button variant='outlined' color='error' onClick={handleClose} >Cancel</Button>
                    <Button variant='contained' color='error'  onClick={handleLogout}>Logout</Button>
                  </div>
      

          </div>
        </Dialog>

          {/* Mobile Responsive Menu */}
          <ResponsiveMenu showMenu={showMenu}/>
      </nav>


  );
};

export default Navbar;

import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/pet-care-logo.jpg';
import userimage from '../assets/user.png';
import { AuthConntext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthConntext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('You Logged Out Successfully');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] underline underline-offset-4 [text-decoration-thickness:1px]"
            : "text-black hover:text-[#632EE3] transition duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/service/:id"
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] underline underline-offset-4 [text-decoration-thickness:1px]"
            : "text-black hover:text-[#632EE3] transition duration-300"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] underline underline-offset-4 [text-decoration-thickness:1px]"
            : "text-black hover:text-[#632EE3] transition duration-300"
        }
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-3 shadow flex flex-col gap-3"
          >
            {links}
            {/* Mobile Buttons */}
            <div className="flex flex-col gap-2 mt-3">
              {user ? (
                <button onClick={handleLogOut} className="btn btn-sm bg-blue-400 text-white">
                  LogOut
                </button>
              ) : (
                <>
                  <button onClick={() => navigate('/auth/login')} className="btn btn-sm bg-blue-400 text-white">
                    Login
                  </button>
                  <button onClick={() => navigate('/auth/signup')} className="btn btn-sm  bg-red-400 text-white">
                    SignUp
                  </button>
                </>
              )}
            </div>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-20 h-20 rounded-full" src={logo} alt="logo" />
          <p className="font-bold text-lg">WarmPaws</p>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8 font-semibold">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex items-center gap-3">
        {user ? (
          <>
            <div className="relative group">
              <img
                src={user.photoURL || userimage}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-400"
              />
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
                {user.displayName || "User"}
              </span>
            </div>
            <button onClick={handleLogOut} className="btn bg-blue-400 text-white">
              LogOut
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/auth/login')} className="btn bg-blue-400 text-white">
              Login
            </button>
            <button onClick={() => navigate('/auth/signup')} className="btn bg-red-400 text-white">
              SignUp
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

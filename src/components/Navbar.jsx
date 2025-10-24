import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <ul className="flex flex-col md:flex-row justify-between gap-6 font-semibold">
      <Link to="/"><li>Home</li></Link>
      <Link to="/service/:id"><li>Services</li></Link>
      <Link to="/profile"><li>My Profile</li></Link>
    </ul>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex w-[150px] h-[80px]">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex gap-3 items-center relative">
          {user ? (
            <div className="relative group">
              {/* User Avatar */}
              <img
                src={user.photoURL || userimage}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-400"
              />
              {/* Hover করলে নাম দেখাবে */}
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
                {user.displayName || "User"}
              </span>
            </div>
          ) : (
            <img src={userimage} alt="user" className="w-10 h-10 rounded-full" />
          )}

          {user ? (
            <button onClick={handleLogOut} className="btn bg-primary text-white">
              LogOut
            </button>
          ) : (
            <>
              <button onClick={() => navigate('/auth/login')} className="btn bg-primary text-white">
                Login
              </button>
              <button onClick={() => navigate('/auth/signup')} className="btn bg-secondary text-white">
                SignUp
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/addblogs">Add Blogs</Link>
          </li>
          <li>
            <Link to="/users-blog">User's Blogs</Link>
          </li>
          <li>
            <Link to="/calender">Calender</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">SignUp</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          CreativBlogs
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/premium"
          className="tooltip tooltip-left"
          data-tip="Get Primium Access"
        >
          <FaCrown className="text-2xl text-warning mr-2 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2" />
        </Link>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="indicator-item text-primary">
              1<sup>+</sup>
            </span>
          </div>
        </button>
        {user?.uid && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/user/profile" className="justify-between">
                  {user?.displayName}
                </Link>
              </li>
              <li>
                <Link to="/myblogs">My Blogs</Link>
              </li>
              <li>
                <Link to="/allusers">All Users</Link>
              </li>
              <li>
                <Link to="/my-todos">My Todos</Link>
              </li>
              <li>
                <Link to="/user/settings">Settings</Link>
              </li>
              <li>
                <button onClick={logOut}>Log Out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

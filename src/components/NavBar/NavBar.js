import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-slate-400">
        <div className="navbar">
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
              <ul className="menu menu-vertical p-0">
                <Link className="text-base font-semibold" to="/">
                  Home
                </Link>
                <Link className="text-base font-semibold" to="/tropic">
                  Tropic
                </Link>
                <Link className="text-base font-semibold" to="/static">
                  Statics
                </Link>
                <Link className="text-base font-semibold" to="/blog">
                  Blog
                </Link>
              </ul>
            </ul>
          </div>
          <p className="text-xl mx-auto lg:ml-10 text-center font-semibold">
            Chase Your Brain
          </p>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link className="mr-10 text-xl font-semibold" to="/">
              Home
            </Link>
            <Link className="mr-10 text-xl font-semibold" to="/tropic">
              Tropic
            </Link>
            <Link className="mr-10 text-xl font-semibold" to="/static">
              Statics
            </Link>
            <Link className="mr-10 text-xl font-semibold" to="/blog">
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

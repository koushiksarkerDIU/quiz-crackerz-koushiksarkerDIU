import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-slate-400">
        <div className="flex-1 ml-10 pl-10 text-3xl font-semibold">
          <p>Chase Your Brain</p>
        </div>
        <div className="flex-none ">
          <Link className="mr-10 text-xl font-semibold" to="/home">
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
        </div>
      </div>
    </div>
  );
};

export default Header;

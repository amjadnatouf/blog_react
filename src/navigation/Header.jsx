import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center w-3/4 border-b-gray-300 border-b-2 p-2">
        <Link
          to="/"
          className="text-4xl font-bold tracking-wider mt-3 logo cursor-pointer"
        >
          LOGO
        </Link>
        <ul className="flex justify-between gap-5">
          <li>
            <NavLink to="/newPost" className="text-lg font-semibold">
              New Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="capitalize border-2 rounded-md py-2 px-4 logo nav-links text-xl"
            >
              blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

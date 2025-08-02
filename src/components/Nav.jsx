import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Blogging Website
        </Link>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/add" className="hover:text-gray-300">
                Add Blog
              </Link>
              <button
                onClick={onLogout}
                className="hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
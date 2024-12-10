import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Horizontal bar */}
      <div className="absolute top-0 left-0 w-full bg-white text-black p-4 flex justify-end items-center space-x-6 z-10">
        {/* Search Bar */}
        <div className="relative md:w-1/4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded bg-gray-300 text-white placeholder-gray-400"
          />
        </div>

        {/* Notification Icon */}
        <div>
          <Link to="/notification">
            <span className="text-xl cursor-pointer hover:text-gray-400">
              🔔
            </span>
          </Link>
        </div>

        {/* Username */}
        <div>
          <span className="text-lg">Username</span>
        </div>
      </div>

      {/* Sidebar */}
      <div className="absolute hidden lg:block left-0 pt-16 w-64 min-h-full bg-gray-800 text-white p-4 z-10">
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block hover:bg-gray-600 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/booking" className="block hover:bg-gray-600 p-2 rounded">
              Bookings
            </Link>
          </li>
          <li>
            <Link to="/drivers" className="block hover:bg-gray-600 p-2 rounded">
              Drivers
            </Link>
          </li>
          <li>
            <Link
              to="/notification"
              className="block hover:bg-gray-600 p-2 rounded"
            >
              Notification
            </Link>
          </li>
          <li>
            <Link to="/setting" className="block hover:bg-gray-600 p-2 rounded">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/uicomponents" className="block hover:bg-gray-600 p-2 rounded">
              UI Components
            </Link>
          </li>
        </ul>
        <hr className="my-6 border-gray-600" />
        <ul className="space-y-4">
          <li>
            <Link
              to="/payments"
              className="block hover:bg-gray-600 p-2 rounded"
            >
              Payment Details
            </Link>
          </li>
          <li>
            <Link
              to="/transaction"
              className="block hover:bg-gray-600 p-2 rounded"
            >
              Transaction
            </Link>
          </li>
          <li>
            <Link
              to="/carreport"
              className="block hover:bg-gray-600 p-2 rounded"
            >
              Car Report
            </Link>
          </li>
        </ul>
        <button className="mt-6 w-full p-2 bg-red-500 text-white rounded">
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;

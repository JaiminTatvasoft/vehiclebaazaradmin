import React, { useState } from "react";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Profile Settings");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile Settings":
        return (
          <>
            {/* Form */}
            <div className="grid grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full px-3 py-2 focus:ring focus:ring-blue-200"
                  value="Mason"
                />
              </div>
              {/* Last Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-full px-3 py-2 focus:ring focus:ring-blue-200"
                  value="Wilson"
                />
              </div>
              {/* Email */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-md w-full px-3 py-2 focus:ring focus:ring-blue-200"
                  value="masonwilson123@gmail.com"
                />
              </div>
              {/* Phone */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone number
                </label>
                <div className="flex items-center space-x-2">
                  <select
                    className="border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
                    defaultValue="US"
                  >
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="CA">CA</option>
                  </select>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md w-full px-3 py-2 focus:ring focus:ring-blue-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Change Password</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Old Password */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Old Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="border border-gray-300 rounded-md w-full px-3 py-2 focus:ring focus:ring-blue-200"
                      placeholder="xxxxxxxxxx"
                    />
                    <button className="absolute right-3 top-2.5 text-gray-500">
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
                {/* New Password */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="border border-gray-300 rounded-md w-full px-3 py-2 focus:ring focus:ring-blue-200"
                      placeholder="xxxxxxxxxx"
                    />
                    <button className="absolute right-3 top-2.5 text-gray-500">
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "Drivers Settings":
        return <div>Drivers Settings Content Goes Here...</div>;
      case "Payment Methods":
        return <div>Payment Methods Content Goes Here...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen pt-20">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg p-6 md:block">
        {/* Profile Section */}
        <div className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full"
          />
          <button className="text-blue-500 text-sm mt-2">Update Picture</button>
          <h3 className="text-lg font-semibold mt-4">Mason Wilson</h3>
          <p className="text-gray-500 text-sm">Admin</p>
        </div>

        {/* Notifications Section */}
        <div className="mt-8 hidden md:block">
          <h4 className="text-gray-700 font-medium mb-4">Notifications</h4>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 text-sm">New Bookings</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 text-sm">Cancellation</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 text-sm">Due Payment</span>
            <input type="checkbox" className="toggle-switch" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-sm">Maintenance</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Profile Information</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Save
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              className={`pb-2 font-medium ${
                activeTab === "Profile Settings"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Profile Settings")}
            >
              Profile Settings
            </button>
            <button
              className={`pb-2 font-medium ${
                activeTab === "Drivers Settings"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Drivers Settings")}
            >
              Drivers Settings
            </button>
            <button
              className={`pb-2 font-medium ${
                activeTab === "Payment Methods"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("Payment Methods")}
            >
              Payment Methods
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
      <div className="mt-8 md:hidden px-8">
        <h4 className="text-gray-700 font-medium mb-4">Notifications</h4>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 text-sm">New Bookings</span>
          <input type="checkbox" className="toggle-switch" defaultChecked />
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 text-sm">Cancellation</span>
          <input type="checkbox" className="toggle-switch" defaultChecked />
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 text-sm">Due Payment</span>
          <input type="checkbox" className="toggle-switch" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm">Maintenance</span>
          <input type="checkbox" className="toggle-switch" defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default Setting;

import React from "react";

const Payments = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-20">
      {/* Statistics Section */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md text-center col-span-3 sm:col-span-1">
          <h3 className="text-gray-500 font-medium">Total Earnings</h3>
          <p className="text-2xl font-bold text-blue-600">$352,893</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center col-span-3 sm:col-span-1">
          <h3 className="text-gray-500 font-medium">Amounts Paid</h3>
          <p className="text-2xl font-bold text-purple-600">$88,089</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center col-span-3 sm:col-span-1">
          <h3 className="text-gray-500 font-medium">Total Refunds</h3>
          <p className="text-2xl font-bold text-red-600">$13,893</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-700">Monetary Statistics</h3>
          <select
            className="px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="Monthly"
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div className="relative w-full h-64">
          {/* Example Chart Placeholder */}
          <img
            // src="https://via.placeholder.com/800x40?text=Chart+Placeholder"
            alt="Chart"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Payments;

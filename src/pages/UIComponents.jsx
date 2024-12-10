import React, { useState } from "react";

const UIComponents = () => {
  const [visibility, setVisibility] = useState({
    Carousel: true,
    "Partner Component": true,
    "Frequent Rides": true,
    "How To Book": true,
    "Benefits of Renting Car": true,
    Comparison: true,
    "Why Choose Us": false,
    Testimonials: true,
    "Customer Choice": true,
    "Subscribe Letter": true,
    Income: true,
    Expense: true,
    "Hire vs cancel": true,
    "Car Availability": true,
    "Live Car Status": true,
    "Earning Summary": true,
    "Recent Bookings": true,
    "All Drivers": true,
    "Driver's Information": false,
    "Trip History": true,
    "Driver's Earnings": true,
    Notifications: true,
    "Total Earnings": true,
    "Amounts Paid": true,
    "Total Refunds": true,
    "Monetary Statistics": true,
    "Recent Transactions": true,
    "All Cars": true,
    "Car Information": true,
    "Car Live Location": true,
  });

  const toggleVisibility = (componentName) => {
    setVisibility((prevState) => ({
      ...prevState,
      [componentName]: !prevState[componentName],
    }));
  };

  const components = [
    "Carousel",
    "Partner Component",
    "Frequent Rides",
    "How To Book",
    "Benefits of Renting Car",
    "Comparison",
    "Why Choose Us",
    "Testimonials",
    "Customer Choice",
    "Subscribe Letter",
    "Income",
    "Expense",
    "Hire vs cancel",
    "Car Availability",
    "Live Car Status",
    "Earning Summary",
    "Recent Bookings",
    "All Drivers",
    "Driver's Information",
    "Trip History",
    "Driver's Earnings",
    "Notifications",
    "Total Earnings",
    "Amounts Paid",
    "Total Refunds",
    "Monetary Statistics",
    "Recent Transactions",
    "All Cars",
    "Car Information",
    "Car Live Location",
  ];

  return (
    <div className="overflow-x-auto px-4 py-6 pt-28">
      <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Component Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Visible/Not-Visible
            </th>
          </tr>
        </thead>
        <tbody>
          {components.map((component, index) => (
            <tr
              className="hover:bg-gray-50 border border-gray-200"
              key={component}
            >
              <td className="px-4 py-2 text-sm text-gray-700">{component}</td>
              <td className="px-4 py-2 text-center sm:text-start">
                <button
                  onClick={() => toggleVisibility(component)}
                  className={`relative inline-flex items-center px-4 py-1 border text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none sm:ms-5 ${
                    visibility[component]
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white transition-transform transform ${
                      visibility[component] ? "translate-x-4" : "-translate-x-4"
                    }`}
                  ></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UIComponents;

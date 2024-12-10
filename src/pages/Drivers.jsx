import React, { useState } from "react";

const drivers = [
  { name: "Alex Noman", id: "GF49T4D", status: "Available" },
  { name: "Ethan Miller", id: "GF49T4D", status: "Unavailable" },
  { name: "Mason Wilson", id: "GF49T4D", status: "Available" },
  { name: "Caleb Smith", id: "GF49T4D", status: "Available" },
  { name: "Emma Davis", id: "GF49T4D", status: "Unavailable" },
  { name: "Sam Taylor", id: "GF49T4D", status: "Unavailable" },
  { name: "Amelia Turner", id: "GF49T4D", status: "Available" },
  { name: "Riley Morgan", id: "GF49T4D", status: "Available" },
  { name: "Luke Norton", id: "GF49T4D", status: "Unavailable" },
  { name: "James Carter", id: "GF49T4D", status: "Unavailable" },
];

const tripHistory = [
  { no: 1, details: "San Diego - Dallas", status: "Completed" },
  { no: 2, details: "Phoenix - San Jose", status: "Cancelled" },
  { no: 3, details: "San Francisco - Austin", status: "Completed" },
  { no: 4, details: "Los Angeles - New York", status: "Completed" },
  { no: 5, details: "Chicago - Miami", status: "Cancelled" },
  { no: 6, details: "Houston - Seattle", status: "Completed" },
  { no: 7, details: "Dallas - Denver", status: "Completed" },
  { no: 8, details: "San Diego - Phoenix", status: "Cancelled" },
  { no: 9, details: "Austin - San Francisco", status: "Completed" },
  { no: 10, details: "New York - Boston", status: "Cancelled" },
];

const Drivers = () => {
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);

  return (
    <div className="h-screen bg-gray-100 lg:ms-4 pt-20">
      {/* Left Sidebar */}
      <div className="bg-white w-full md:absolute py-6 space-y-4 md:w-auto md:min-w-48 xl:min-w-64 2xl:min-w-96 px-2">
        <h2 className="text-lg font-semibold my-4">All Drivers</h2>
        {drivers.map((driver, index) => (
          <div
            key={index}
            onClick={() => setSelectedDriver(driver)}
            className={`flex items-center justify-between p-2 cursor-pointer rounded-md mb-2 ${
              driver.status === "Available" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <div>
              <h3 className="text-sm font-medium">{driver.name}</h3>
              <p className="text-xs text-gray-500">ID: {driver.id}</p>
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded ${
                driver.status === "Available"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {driver.status}
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1 py-6 md:ms-48 xl:ms-64 2xl:ms-96">
        {/* Driver's Information */}
        <div className="md:ms-2 col-span-2 bg-white shadow-md p-4 rounded-md me-4">
          {/* First row - Driver's Information */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Driver's Information</h2>
          </div>

          {/* Second row - Table with Driver details */}
          <div className="mb-4 overflow-x-auto">
            <table className="w-full text-left table-auto border-separate border-spacing-2">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 px-4">Driver</th>
                  <th className="pb-2 px-4">Car No.</th>
                  <th className="pb-2 px-4">Status</th>
                  <th className="pb-2 px-4">Car Driving</th>
                  <th className="pb-2 px-4">Number Plate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4">Alex Noman</td>
                  <td className="px-4">6465</td>
                  <td className="px-4 text-green-500">Available</td>
                  <td className="px-4">Nissan Rogue</td>
                  <td className="px-4">XYZ-5678</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Third row - Information blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-medium text-2xl">20</p>
              <p className="font-medium text-sm">trips completed</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-medium text-2xl">212km</p>
              <p className="font-medium text-sm">total travelled</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-medium text-2xl">00</p>
              <p className="font-medium text-sm">accident history</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-medium text-2xl">4</p>
              <p className="font-medium text-sm">passenger capacity</p>
            </div>
          </div>

          {/* Fourth row - Email, Mobile and Assign Trip button */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm">
                <span className="font-medium">1234567890</span>{" "}
                {selectedDriver.email}
              </span>
              <span className="text-sm ms-4">
                <span className="font-medium">driver@gmail.com</span>{" "}
                {selectedDriver.mobile}
              </span>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Assign Trip
            </button>
          </div>
        </div>

        {/* Trip History */}
        <div className="md:ms-2 grid grid-cols-4 gap-6 me-4">
          <div className="col-span-4 mx-4 sm:mx-0 sm:col-span-2 mt-6 bg-white shadow-md p-4 rounded-md max-h-80">
            <h2 className="text-lg font-semibold mb-4">Trip History</h2>

            {/* Table Container */}
            <div className="overflow-y-auto max-h-64">
              {/* Table Headings */}
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2">No.</th>
                    <th className="text-left p-2">Trip Details</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
              </table>

              {/* Scrollable Table Body */}
              <div className="overflow-y-auto max-h-48">
                <table className="w-full text-sm">
                  <tbody>
                    {/* Loop through tripHistory array to generate rows */}
                    {tripHistory.map((trip) => (
                      <tr key={trip.no}>
                        <td className="p-2">{trip.no}</td>
                        <td className="p-2">{trip.details}</td>
                        <td
                          className={`p-2 ${
                            trip.status === "Completed"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {trip.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Driver's Earnings */}
          <div className="col-span-4 mx-4 sm:mx-0 bg-white sm:col-span-2 shadow-md p-4 mt-6 rounded-md max-h-80 me-4 overflow-y-auto">
            {/* First Row - Title and Dropdown */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Driver's Earnings</h2>
              <select className="bg-gray-100 border p-2 rounded-md">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Weekly</option>
              </select>
            </div>

            {/* Second Row - Amount with Up Arrow and Percentage */}
            <div className="flex justify-center items-center mt-4">
              <p className="text-3xl font-bold mr-2">$2000.00</p>
              <div className="flex items-center text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v10.382l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.382V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1">2.5%</span>
              </div>
            </div>

            {/* Third Row - Compared to Previous Day */}
            <div className="text-center mt-2">
              <p className="text-sm text-gray-500">
                Compared to $9940 previous day
              </p>
            </div>

            {/* Fourth Row - Last Week Income */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold">Last week income</p>
              <p className="text-lg font-bold">$25,658.00</p>
            </div>

            {/* Fifth Row - Two Equal Divs */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-medium text-sm">$2000</p>
                <p className="font-medium text-sm">total balance</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-medium text-sm">$40000</p>
                <p className="font-medium text-sm">total withdrawn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivers;

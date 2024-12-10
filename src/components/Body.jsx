import React from "react";

const Body = () => {
  const carData = [
    {
      no: "01",
      carNo: "6465",
      driver: "Alex Noman",
      tripStatus: "Completed",
      earnings: "$35.44",
    },
    {
      no: "02",
      carNo: "5665",
      driver: "Razib Rahman",
      tripStatus: "Pending",
      earnings: "$0.00",
    },
    {
      no: "03",
      carNo: "1755",
      driver: "Luke Norton",
      tripStatus: "In Route",
      earnings: "$23.50",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-4 pt-20">
      <div className="gap-6">
        {/* Sidebar */}
        <div className="w-full md:absolute space-y-4 md:w-auto md:min-w-64 xl:min-w-72 2xl:min-w-96">
          <div>
            <h1 className="text-xl font-bold">Today's Statistics</h1>
            <p className="text-gray-500 text-xs">Tue, 14 Nov 2022, 11:30 AM</p>
          </div>
          {/* Income */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-semibold">Income</h2>
              <select className="border rounded-lg px-2 py-1 text-sm">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last Week</option>
                <option>Last Month</option>
              </select>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold text-red-500">$9460.00</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-1">1.5%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold text-gray-500">
                Compared to $9940 yesterday
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold">Last week income</p>
              <p className="text-xl font-bold">$25658.00</p>
            </div>
          </div>

          {/* Expenses */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-semibold">Expense</h2>
              <select className="border rounded-lg px-2 py-1 text-sm">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last Week</option>
                <option>Last Month</option>
              </select>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-bold text-green-500">$5660.00</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-1">2.5%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold text-gray-500">
                Compared to $5240 yesterday
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold">Last week income</p>
              <p className="text-xl font-bold">$22658.00</p>
            </div>
          </div>

          {/* Hire vs Cancel */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-semibold">Hire vs Cancel</h2>
              <select className="border rounded-lg px-2 py-1 text-sm">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last Week</option>
                <option>Last Month</option>
              </select>
            </div>

            <div className="flex items-center justify-center mt-4">
              <div className="w-48 h-48 border-4 border-blue-500 rounded-full relative"></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold">Total Hired</p>
              <p className="text-sm font-bold">54%</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold">Total Canceled</p>
              <p className="text-sm font-bold">20%</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold">Total Pending</p>
              <p className="text-sm font-bold">26%</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:ms-64 xl:ms-72 2xl:ms-96 mt-4 md:mt-0">
          {/* Car Availability */}
          <div className="bg-white p-4 rounded-lg shadow mb-6 md:ms-4">
            {/* Title */}
            <div>
              <h2 className="text-xl font-semibold">Car Availability</h2>
            </div>

            {/* Input Fields and Button */}
            <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-center sm:items-start gap-4 mt-4">
              {/* Input fields */}
              <div className="flex flex-wrap justify-start gap-4 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Car number"
                  className="border rounded-lg px-4 py-2 focus:outline-none w-full sm:w-56 mt-2"
                />
                <input
                  type="date"
                  className="border rounded-lg px-4 py-2 focus:outline-none w-full sm:w-56 mt-2"
                />
                <input
                  type="time"
                  className="border rounded-lg px-4 py-2 focus:outline-none w-full sm:w-56 mt-2"
                />
              </div>

              {/* Check Button */}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full sm:w-auto mt-2 sm:ml-4">
                Check
              </button>
            </div>
          </div>

          {/* Live Car Status */}
          <div className="bg-white p-4 rounded-lg shadow mb-6 md:ms-4">
            <h2 className="text-xl font-semibold mb-4">Live Car Status</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto border-separate border-spacing-2">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 px-4">No</th>
                    <th className="pb-2 px-4">Car No.</th>
                    <th className="pb-2 px-4">Driver</th>
                    <th className="pb-2 px-4">Trip Status</th>
                    <th className="pb-2 px-4">Earnings</th>
                    <th className="pb-2 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {carData.map((car, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4">{car.no}</td>
                      <td className="px-4">{car.carNo}</td>
                      <td className="px-4">{car.driver}</td>
                      <td
                        className={`px-4 ${
                          car.tripStatus === "Completed"
                            ? "text-green-500"
                            : car.tripStatus === "Pending"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {car.tripStatus}
                      </td>
                      <td className="px-4">{car.earnings}</td>
                      <td className="px-4">
                        <button className="text-blue-500">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Earning Summary */}
          <div className="bg-white p-4 rounded-lg shadow md:ms-4">
            <h2 className="text-xl font-semibold mb-4">Earning Summary</h2>
            <div className="h-48 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

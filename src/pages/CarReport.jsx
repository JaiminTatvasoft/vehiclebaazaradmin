import React from "react";

const CarReport = () => {
  const cars = [
    { name: "Alex Noman", status: "Available" },
    { name: "Ethan Miller", status: "Unavailable" },
    { name: "Mason Wilson", status: "Available" },
    { name: "Caleb Smith", status: "Unavailable" },
    { name: "Emma Davis", status: "Unavailable" },
    { name: "Sam Taylor", status: "Unavailable" },
    { name: "Amelia Turner", status: "Available" },
    { name: "Riley Morgan", status: "Available" },
    { name: "Luke Norton", status: "Unavailable" },
    { name: "James Carter", status: "Available" },
  ];

  const details = [
    {
      id: "#5D869F5L2",
      details: "San Diego - Dallas",
      status: "Completed",
    },
    {
      id: "#8E869P5L4",
      details: "Phoenix - San Jose",
      status: "Canceled",
    },
    {
      id: "#3H359K9L1",
      details: "San Francisco - Austin",
      status: "Completed",
    },
    {
      id: "#5D869F5L2",
      details: "San Diego - Dallas",
      status: "Completed",
    },
    {
      id: "#8E869P5L4",
      details: "Phoenix - San Jose",
      status: "Canceled",
    },
    {
      id: "#3H359K9L1",
      details: "San Francisco - Austin",
      status: "Completed",
    },
    {
      id: "#3H359K9L1",
      details: "San Francisco - Austin",
      status: "Completed",
    },
    {
      id: "#5D869F5L2",
      details: "San Diego - Dallas",
      status: "Completed",
    },
    {
      id: "#8E869P5L4",
      details: "Phoenix - San Jose",
      status: "Canceled",
    },
    {
      id: "#3H359K9L1",
      details: "San Francisco - Austin",
      status: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 lg:ms-4 pt-20">
      {/* Sidebar */}
      <div className="bg-white w-full md:absolute py-6 space-y-4 md:w-48 xl:min-w-64 2xl:min-w-96 px-2">
        <h2 className="text-lg font-medium mb-4">All Cars</h2>
        <ul>
          {cars.map((car, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center py-2 px-2 mb-2 rounded-lg hover:bg-gray-100"
            >
              <div>
                <h3 className="text-sm font-medium">{car.name}</h3>
                <p className="text-sm text-gray-500">Car no. 5689</p>
              </div>
              <span
                className={`px-2 py-1 rounded-lg text-xs ${
                  car.status === "Available"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {car.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-6 md:ms-48 xl:ms-64 2xl:ms-96">
        {/* Car Details */}
        <div className="md:ms-2 bg-white shadow-md rounded-md p-4 me-4">
          {/* First Row - Car Information Title */}
          <div className="col-span-3">
            <h3 className="text-lg font-medium mb-4">Car Information</h3>
          </div>

          {/* Second Row - Car Image and Remove Button */}
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Car"
              className="w-24 h-24 rounded-lg"
            />
            <div>
              <h4 className="text-xl font-medium">Toyota Corolla</h4>
              <p className="text-sm text-gray-500">Driver: Alex Noman</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg">
              Remove
            </button>
          </div>

          {/* Third Row - Table with Car Details */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left text-sm border-separate border-spacing-2">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 px-4">Driver</th>
                  <th className="pb-2 px-4">Total Trips</th>
                  <th className="pb-2 px-4">Status</th>
                  <th className="pb-2 px-4">Last Maintenance</th>
                  <th className="pb-2 px-4">Number Plate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4">Alex Noman</td>
                  <td className="px-4">253</td>
                  <td className="px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded-lg text-sm">
                      Available
                    </span>
                  </td>
                  <td className="px-4">11 Sept, 2023</td>
                  <td className="px-4">XYZ-5678</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Location and Trip History */}
        <div className="md:ms-2 grid grid-cols-4 gap-6 mt-6 me-4">
          {/* Car Live Location Section */}
          <div className="bg-white col-span-4 sm:col-span-2 p-6 rounded-lg shadow-md max-h-80 overflow-y-auto">
            <h3 className="text-lg font-medium mb-4">Car Live Location</h3>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>

          {/* Trip History Section */}
          <div className="bg-white col-span-4 sm:col-span-2 p-6 rounded-lg shadow-md max-h-80">
            <h3 className="text-lg font-medium mb-4">Trip History</h3>

            {/* Table Container */}
            <div className="overflow-y-auto max-h-64">
              {/* Table Headings - Fixed */}
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
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
                    {/* Loop through trip history */}
                    {details.map((trip, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-2">{trip.id}</td>
                        <td className="p-2">{trip.details}</td>
                        <td className="p-2">
                          <span
                            className={`px-2 py-1 rounded-lg text-xs ${
                              trip.status === "Completed"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {trip.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarReport;

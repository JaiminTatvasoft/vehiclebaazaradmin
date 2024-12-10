import React from "react";

const Booking = () => {
  const bookings = [
    {
      no: "01",
      bookingId: "#5DB69FL2",
      customerName: "Mason Wilson",
      route: "San Diego - Dallas",
      dateTime: "15 Sept, 8:30AM",
      status: "Confirmed",
    },
    {
      no: "02",
      bookingId: "#3R7G8T9K1",
      customerName: "Benjamin Anderson",
      route: "New York - Los Angeles",
      dateTime: "20 Oct, 2:45PM",
      status: "Cancelled",
    },
    {
      no: "03",
      bookingId: "#1A2B3C4D5",
      customerName: "Samuel Parker",
      route: "Chicago - Miami",
      dateTime: "5 Dec, 4:00PM",
      status: "Confirmed",
    },
    {
      no: "04",
      bookingId: "#9E8F76H5",
      customerName: "Isabella Scott",
      route: "Boston - Seattle",
      dateTime: "8 Jan, 9:30AM",
      status: "Confirmed",
    },
    {
      no: "05",
      bookingId: "#6I7J8K9L0",
      customerName: "Amelia Jones",
      route: "Phoenix - Portland",
      dateTime: "25 Feb, 1:00PM",
      status: "Cancelled",
    },
    {
      no: "06",
      bookingId: "#4M3N2O1P0",
      customerName: "Andrew Coleman",
      route: "Minneapolis - Charlotte",
      dateTime: "11 May, 11:00AM",
      status: "Confirmed",
    },
    {
      no: "07",
      bookingId: "#009R8S7T6",
      customerName: "Daniel Bennett",
      route: "Detroit - Tampa",
      dateTime: "15 Sept, 8:30AM",
      status: "Confirmed",
    },
    {
      no: "08",
      bookingId: "#5U4V3W2X1",
      customerName: "Ava Johnson",
      route: "St. Louis - Raleigh",
      dateTime: "28 Sep, 12:30PM",
      status: "Confirmed",
    },
    {
      no: "09",
      bookingId: "#5CD7E8F9",
      customerName: "Henry Walker",
      route: "Denver - Atlanta",
      dateTime: "22 Nov, 9:45AM",
      status: "Confirmed",
    },
    {
      no: "10",
      bookingId: "#4K5L6M7N8",
      customerName: "William Turner",
      route: "Austin - Nashville",
      dateTime: "9 Oct, 3:15PM",
      status: "Cancelled",
    },
  ];
  return (
    <div className="p-6 bg-white shadow-md rounded-lg pt-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md">
            Filter
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Export
          </button>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Booking ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Pick-up & Drop-off</th>
              <th className="px-4 py-2">Date & Time</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 text-gray-700"
              >
                <td className="px-4 py-2">{booking.no}</td>
                <td className="px-4 py-2">{booking.bookingId}</td>
                <td className="px-4 py-2">{booking.customerName}</td>
                <td className="px-4 py-2">{booking.route}</td>
                <td className="px-4 py-2">{booking.dateTime}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-md text-sm ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <button className="text-blue-500">Details</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                      Assign
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;

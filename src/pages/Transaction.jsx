import React from "react";

const Transaction = () => {
  const bookings = [
    {
      no: "01",
      bookingId: "5DB69FL2",
      Name: "Mason Wilson",
      Amount: "$315",
      dateTime: "15 Sept, 8:30AM",
      TransactionType: "Payment",
    },
    {
      no: "02",
      bookingId: "3R7G8T9K1",
      Name: "Benjamin Anderson",
      Amount: "$315",
      dateTime: "20 Oct, 2:45PM",
      TransactionType: "Earning",
    },
    {
      no: "03",
      bookingId: "1A2B3C4D5",
      Name: "Samuel Parker",
      Amount: "$315",
      dateTime: "5 Dec, 4:00PM",
      TransactionType: "Refund",
    },
    {
      no: "04",
      bookingId: "9E8F76H5",
      Name: "Isabella Scott",
      Amount: "$315",
      dateTime: "8 Jan, 9:30AM",
      TransactionType: "Payment",
    },
    {
      no: "05",
      bookingId: "6I7J8K9L0",
      Name: "Amelia Jones",
      Amount: "$315",
      dateTime: "25 Feb, 1:00PM",
      TransactionType: "Earning",
    },
    {
      no: "06",
      bookingId: "4M3N2O1P0",
      Name: "Andrew Coleman",
      Amount: "$315",
      dateTime: "11 May, 11:00AM",
      TransactionType: "Refund",
    },
    {
      no: "07",
      bookingId: "009R8S7T6",
      Name: "Daniel Bennett",
      Amount: "$315",
      dateTime: "15 Sept, 8:30AM",
      TransactionType: "Payment",
    },
    {
      no: "08",
      bookingId: "5U4V3W2X1",
      Name: "Ava Johnson",
      Amount: "$315",
      dateTime: "28 Sep, 12:30PM",
      TransactionType: "Earning",
    },
    {
      no: "09",
      bookingId: "5CD7E8F9",
      Name: "Henry Walker",
      Amount: "$315",
      dateTime: "22 Nov, 9:45AM",
      TransactionType: "Refund",
    },
    {
      no: "10",
      bookingId: "4K5L6M7N8",
      Name: "William Turner",
      Amount: "$315",
      dateTime: "9 Oct, 3:15PM",
      TransactionType: "Earning",
    },
  ];
  return (
    <div className="p-6 bg-white shadow-md rounded-lg pt-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
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
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Names</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date & Time</th>
              <th className="px-4 py-2">Transaction Type</th>
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
                <td className="px-4 py-2">{booking.Name}</td>
                <td className="px-4 py-2">{booking.Amount}</td>
                <td className="px-4 py-2">{booking.dateTime}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-md text-sm ${
                      booking.TransactionType === "Payment"
                        ? "bg-purple-100 text-purple-600"
                        : booking.TransactionType === "Refund"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                      // : booking.TransactionType === "Earning"
                      // ? "bg-blue-100 text-blue-600"
                      // : ""
                    }`}
                  >
                    {booking.TransactionType}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                      Details
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

export default Transaction;

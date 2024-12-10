import React from "react";

const Notification = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg pt-20">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md">
            Filter
          </button>
          <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md">
            Delete
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {/* Notification 1 */}
        <div className="py-4 flex items-start">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 mt-1"
            defaultChecked
          />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <span className="text-blue-500 font-bold mr-2">New</span>
              New Booking Request Received for Upcoming Trip
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              You received a new booking request for a trip scheduled on 15
              Sept, 8:30am. The passenger, "Emelia," has requested
              transportation from "New York - Hoboken."
            </p>
          </div>
          <div className="ml-auto text-gray-500 text-sm whitespace-nowrap">
            8 Sept, 8:30AM
          </div>
        </div>

        {/* Notification 2 */}
        <div className="py-4 flex items-start">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 mt-1"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">
              Driver Assignment for Scheduled Trip - Action Required
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              The trip with booking ID #5DB69FL2 has been successfully assigned
              to Driver James Carl. This trip is scheduled for 21 Sept, 9:30am.
            </p>
          </div>
          <div className="ml-auto text-gray-500 text-sm whitespace-nowrap">
            7 Sept, 6:30AM
          </div>
        </div>

        {/* Notification 3 */}
        <div className="py-4 flex items-start">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 mt-1"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">
              Upcoming Vehicle Maintenance Reminder
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Vehicle 23564 is due for scheduled maintenance on 12 Sept, 4:30pm.
              This maintenance is essential to keep the vehicle in top working
              condition.
            </p>
          </div>
          <div className="ml-auto text-gray-500 text-sm whitespace-nowrap">
            7 Sept, 8:42AM
          </div>
        </div>

        {/* Notification 4 */}
        <div className="py-4 flex items-start">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 mt-1"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">
              Payment Confirmation - Successful Transaction
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              We are delighted to inform you that the payment for trip #5DB69FL2
              has been successfully processed and confirmed. The transaction has
              now completed.
            </p>
          </div>
          <div className="ml-auto text-gray-500 text-sm whitespace-nowrap">
            6 Sept, 4:22AM
          </div>
        </div>

        {/* Notification 5 */}
        <div className="py-4 flex items-start">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 mt-1"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">
              Booking Cancellation - Passenger Update
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Passenger "Michael Rachel" has canceled their booking for trip
              #5DB69FL2. As a result, the trip status has been automatically
              updated to "Canceled."
            </p>
          </div>
          <div className="ml-auto text-gray-500 text-sm whitespace-nowrap">
            5 Sept, 9:32AM
          </div>
        </div>

        {/* Notification 6 */}
        <div className="py-4 flex items-start">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 mt-1"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">
              Important System Update and Scheduled Maintenance
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              We would like to inform you about an upcoming system maintenance
              scheduled for 11 Sept, 11:30am. During this maintenance window,
              the system may experience temporary unavailability.
            </p>
          </div>
          <div className="ml-auto text-gray-500 text-sm whitespace-nowrap">
            5 Sept, 7:44AM
          </div>
        </div>

        {/* Notification 7 */}
        <div className="py-4 flex items-start">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 mt-1"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">
              Driver Unavailability - Availability of New Driver Required
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Driver 23564 is unavailable and trip #5DB69FL2 is now on hold.
              Assignment of a new driver is required as soon as possible.
            </p>
          </div>
          <div className="ml-auto text-gray-500 text-sm whitespace-nowrap">
            4 Sept, 11:35AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

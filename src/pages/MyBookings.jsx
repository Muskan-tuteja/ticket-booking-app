import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import BlurCircle from "../components/BlurCircle";
import isoTimeFormat from "../libaray/isoTimeFormat";

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedBooking = localStorage.getItem("myBooking");
    if (storedBooking) {
      const parsed = JSON.parse(storedBooking);
      setBooking(parsed);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  if (!booking)
    return (
      <p className="px-6 md:px-16 lg:px-40 pt-30 md:pt-40">
        No bookings found!
      </p>
    );

  // Format date nicely
  const formattedDate = new Date(booking.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });

  // Calculate total price
  const totalPrice = booking.seats.reduce((acc, seat) => acc + seat.price, 0);

  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-4">My Booking</h1>

      <div className="flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl">
        <div className="flex flex-col md:flex-row">
          <img
            src={booking.movie.poster_path}
            alt=""
            className="md:max-w-45 aspect-video h-auto object-cover object-bottom rounded"
          />
          <div className="flex flex-col p-4">
            <p className="text-lg font-semibold">{booking.movie.title}</p>
            <p className="text-gray-400 text-sm">{booking.movie.runtime} mins</p>

            <p className="text-gray-400 text-sm mt-auto">
              {formattedDate} at{" "}
              <span>{isoTimeFormat(booking.time)}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:items-end md:text-right justify-between p-4">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold mb-3">
              {currency}
              {totalPrice}
            </p>
            <button
              onClick={() => alert("Payment Successful!")}
              className="bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer"
            >
              Pay Now
            </button>

            {/* Cancel Button */}
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to cancel this ticket?"
                  )
                ) {
                  localStorage.removeItem("myBooking"); // remove booking
                  setBooking(null); // update state
                  alert("Ticket cancelled successfully!");
                }
              }}
              className="bg-red-500 px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer text-white hover:bg-red-600 transition"
            >
              Cancel Ticket
            </button>
          </div>

          <div className="text-sm">
            <p>
              <span className="text-gray-400">Total Tickets:</span>{" "}
              {booking.seats.length}
            </p>
            <p>
              <span className="text-gray-400">Seats:</span>{" "}
              {booking.seats
                .map((s) => `${s.seatId} (${s.type}, ${currency}${s.price})`)
                .join(", ")}
            </p>
            <p className="mt-1 font-semibold">
              <span className="text-gray-400">Total Price:</span> {currency}
              {totalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;

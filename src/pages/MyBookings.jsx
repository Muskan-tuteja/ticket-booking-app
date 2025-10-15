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
      <p className="px-6 md:px-16 lg:px-40 pt-60 md:pt-40 text-center font-bold">
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
      {/* Background circles */}
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-4 text-center md:text-left">My Booking</h1>

      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg p-4 gap-4">
        
        {/* Movie & Info Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-2/3">
          <img
            src={booking.movie.poster_path}
            alt={booking.movie.title}
            className="w-full md:w-48 aspect-video object-cover object-bottom rounded"
          />
          <div className="flex flex-col justify-between p-2 md:p-4">
            <p className="text-lg font-semibold">{booking.movie.title}</p>
            <p className="text-gray-400 text-sm">{booking.movie.runtime} mins</p>
            <p className="text-gray-400 text-sm mt-auto">
              {formattedDate} at <span>{isoTimeFormat(booking.time)}</span>
            </p>
          </div>
        </div>

        {/* Seats & Actions Section */}
        <div className="flex flex-col md:items-end md:text-right justify-between p-2 md:p-4 w-full md:w-1/3">
          
          {/* Price & Buttons */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-2">
            <p className="text-2xl font-semibold">{currency}{totalPrice}</p>
            <button onClick={() => alert("Payment Successful!")} className="bg-primary px-4 py-1.5 text-sm rounded-full font-medium cursor-pointer">
              Pay Now
            </button>
            <button
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to cancel this ticket?")
                ) {
                  localStorage.removeItem("myBooking");
                  setBooking(null);
                  alert("Ticket cancelled successfully!");
                }
              }}
              className="bg-red-500 px-4 py-1.5 text-sm rounded-full font-medium text-white hover:bg-red-600 transition"
            >
              Cancel Ticket
            </button>
          </div>

          {/* Seat Details */}
          <div className="text-sm">
            <p>
              <span className="text-gray-400">Total Tickets:</span> {booking.seats.length}
            </p>
            <p className="overflow-x-auto whitespace-nowrap mt-1 py-1 rounded">
              {booking.seats
                .map((s) => `${s.seatId} (${s.type}, ${currency}${s.price})`)
                .join(", ")}
            </p>
            <p className="mt-1 font-semibold">
              <span className="text-gray-400">Total Price:</span> {currency}{totalPrice}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyBookings;

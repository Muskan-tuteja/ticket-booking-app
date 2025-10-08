import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { dummyShowData, dummyDateTimeData } from "../assets/assets";
import isoTimeFormat from "../libaray/isoTimeFormat";
import BlurCircle from "../components/BlurCircle";
import { toast } from "react-hot-toast";

const SeatLayout = () => {
  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]];
  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const navigate = useNavigate();

  // Seat tiers
  const VIP_ROWS = ["A", "B"];
  const REGULAR_ROWS = ["C", "D", "E"];
  const ECONOMY_ROWS = ["F", "G", "H", "I", "J"];

  const VIP_PRICE = 500;
  const REGULAR_PRICE = 350;
  const ECONOMY_PRICE = 200;

  const getShow = async () => {
    const showData = dummyShowData.find((show) => show._id === id);
    if (showData) {
      setShow({ movie: showData, dateTime: dummyDateTimeData });
    }
  };

  useEffect(() => {
    getShow();
  }, []);

  useEffect(() => {
    if (show?.dateTime) {
      const normalizedDate = date.replace(/\b0(\d)\b/g, "$1");
      const allDates = Object.keys(show.dateTime);
      const matchedDate = allDates.find((d) => d === normalizedDate) || allDates[0];
      setTimeSlots(show.dateTime[matchedDate] || []);
    }
  }, [show, date]);

  // Handle seat click with seat type & price
  const handleSeatClick = (seatId, seatType, seatPrice) => {
    if (!selectedTime) {
      toast("Please select time first");
      return;
    }

    if (!selectedSeats.some((s) => s.seatId === seatId) && selectedSeats.length >= 4) {
      toast("You can only select 4 seats");
      return;
    }

    setSelectedSeats((prev) =>
      prev.some((s) => s.seatId === seatId)
        ? prev.filter((s) => s.seatId !== seatId)
        : [...prev, { seatId, type: seatType, price: seatPrice }]
    );
  };

  const handleCheckout = () => {
    if (!selectedTime || selectedSeats.length === 0)
      return toast("Please select time and seats first");

    const totalPrice = selectedSeats.reduce((acc, s) => acc + s.price, 0);

    const bookingData = {
      movie: show.movie,
      date: date,
      time: selectedTime.raw,
      seats: selectedSeats,
      totalPrice,
    };

    localStorage.setItem("myBooking", JSON.stringify(bookingData));
    navigate("/my-bookings");
  };

  // Render seats
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      {Array.from({ length: count }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        let seatType = "Economy";
        let seatPrice = ECONOMY_PRICE;
        let seatClass = "border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black";

        if (VIP_ROWS.includes(row)) {
          seatType = "VIP";
          seatPrice = VIP_PRICE;
          seatClass = "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black";
        } else if (REGULAR_ROWS.includes(row)) {
          seatType = "Regular";
          seatPrice = REGULAR_PRICE;
          seatClass = "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
        }

        const isSelected = selectedSeats.some((s) => s.seatId === seatId);
        const selectedClass =
          seatType === "VIP"
            ? "bg-yellow-500 text-black"
            : seatType === "Regular"
            ? "bg-blue-500 text-white"
            : "bg-gray-400 text-black";

        return (
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId, seatType, seatPrice)}
            className={`h-8 w-8 rounded border cursor-pointer ${
              isSelected ? selectedClass : seatClass
            }`}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  );

  if (!show) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* LEFT SIDEBAR */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>
        <div className="mt-5 space-y-1">
          {timeSlots.length > 0 ? (
            timeSlots.map((item) => (
              <div
                key={item.time}
                onClick={() =>
                  setSelectedTime({
                    raw: item.time,
                    display: isoTimeFormat(item.time),
                  })
                }
                className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                  selectedTime?.raw === item.time
                    ? "bg-primary text-white"
                    : "hover:bg-primary/20"
                }`}
              >
                <ClockIcon className="w-4 h-4" />
                <p className="text-sm">{isoTimeFormat(item.time)}</p>
              </div>
            ))
          ) : (
            <p className="text-sm px-6 text-gray-500">No timings available</p>
          )}
        </div>

        
      </div>

      {/* RIGHT SECTION */}
      <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0px" right="0px" />

        <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>
        <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6">
            {groupRows[0].map((row) => renderSeats(row))}
          </div>
          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>{group.map((row) => renderSeats(row))}</div>
            ))}
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95"
        >
          Proceed to Checkout
          <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SeatLayout;

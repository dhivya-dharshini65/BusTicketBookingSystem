import React, { useState } from "react";
import BookingForm from "./BookingForm";
import BusList from "./BusList";
import TicketConfirmation from "./Confirm";

const TicketBooking = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
  };

  const handleBooking = (details) => {
    setBookingDetails(details);
    setSelectedBus(null);
  };

  return (
    <div className="ticket-box">
      <h2 className="ticket-title">Welcome to Ticket Booking</h2>
      {bookingDetails ? (
        <TicketConfirmation ticket={bookingDetails} />
      ) : (
        <>
          <BusList onBusSelect={handleBusSelect} />
          {selectedBus && (
            <BookingForm bus={selectedBus} onBooking={handleBooking} />
          )}
        </>
      )}
    </div>
  );
};

export default TicketBooking;

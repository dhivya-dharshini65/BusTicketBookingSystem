
import React, { useState } from 'react';
import './SeatSelection.css';

const SeatSelection = ({ bus, onBack, onConfirm }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber) ? prev.filter((s) => s !== seatNumber) : [...prev, seatNumber]
    );
  };

  const handleConfirm = () => {
    onConfirm(selectedSeats); 
  };

  return (
    <div className="seat-selection-container">
      <h2 className="seat-selection-title">Select Seats for {bus.type} Bus</h2>
      <p>Available Seats: {bus.seatsAvailable}</p>
      <div className="seat-grid">
        {Array.from({ length: bus.seatsAvailable }, (_, index) => (
          <div
            key={index}
            className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => handleSeatSelect(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button className="confirm-button" onClick={handleConfirm}>
        Confirm Seats
      </button>
      <button className="back-button" onClick={onBack}>
        Back to Search
      </button>
    </div>
  );
};

export default SeatSelection;

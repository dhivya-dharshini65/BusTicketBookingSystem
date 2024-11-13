import React from 'react';

const ConfirmTicket = ({ data }) => {
    // Destructure the selectedSeats and selectedRoute from the data prop
    const { selectedSeats, selectedRoute } = data || {};

    return (
        <div>
            <h2>Confirm Your Ticket</h2>
            {selectedSeats && selectedRoute ? (
                <>
                    <p>Selected Seats: {selectedSeats.join(', ')}</p>
                    <p>Route: {selectedRoute.type}</p>
                    <p>From: {selectedRoute.from} to {selectedRoute.to}</p>
                    <p>Departure Time: {selectedRoute.departureTime}</p>
                    <p>Arrival Time: {selectedRoute.arrivalTime}</p>
                    {/* Add payment button or additional details here */}
                </>
            ) : (
                <p>No ticket information available.</p>
            )}
        </div>
    );
};

export default ConfirmTicket;

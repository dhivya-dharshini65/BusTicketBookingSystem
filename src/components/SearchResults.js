
// import React, { useState } from 'react';
// import './SearchResults.css';
// import SeatSelection from './SeatSelection';
// import Confirmation from './Confirmation';
// import Payment from './Payment'; // Import Payment component

// const SearchResults = ({ source, destination, date, passengers, busData }) => {
//   const [filters, setFilters] = useState({
//     busType: '',
//     maxPrice: 200,
//   });
//   const [selectedBus, setSelectedBus] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [showPayment, setShowPayment] = useState(false); // New state for payment page

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleBookNow = (bus) => {
//     setSelectedBus(bus);
//   };

//   const handleConfirmSeats = (seats) => {
//     setSelectedSeats(seats);
//   };

//   const handleProceedToPayment = () => {
//     setShowPayment(true); // Show the payment page after confirmation
//   };

//   const filteredBuses = busData.filter((bus) => {
//     const matchesType = !filters.busType || bus.type === filters.busType;
//     const matchesPrice = bus.price <= filters.maxPrice;
//     return matchesType && matchesPrice;
//   });

//   return (
//     <div className="search-results-container">
//       {showPayment ? ( // Show Payment component
//         <Payment bus={selectedBus} selectedSeats={selectedSeats} />
//       ) : selectedSeats.length > 0 && selectedBus ? ( 
//         <Confirmation 
//           bus={selectedBus} 
//           selectedSeats={selectedSeats} 
//           onBack={() => {
//             setSelectedSeats([]);
//             setSelectedBus(null);
//           }}
//           onProceedToPayment={handleProceedToPayment} // Proceed to payment
//         />
//       ) : selectedBus ? ( 
//         <SeatSelection 
//           bus={selectedBus} 
//           onBack={() => setSelectedBus(null)} 
//           onConfirm={handleConfirmSeats}
//         />
//       ) : (
//         <>
//           <div className="search-results-header">
//             <h2 className="search-results-title">
//               Buses from {source} to {destination}
//             </h2>
//             <div className="search-results-filters">
//               <div className="search-results-filter">
//                 <label>Bus Type</label>
//                 <select
//                   name="busType"
//                   value={filters.busType}
//                   onChange={handleFilterChange}
//                   className="search-results-select"
//                 >
//                   <option value="">All Types</option>
//                   <option value="AC">AC</option>
//                   <option value="Non-AC">Non-AC</option>
//                 </select>
//               </div>
//               <div className="search-results-filter">
//                 <label>Maximum Price: ₹{filters.maxPrice}</label>
//                 <input
//                   type="range"
//                   name="maxPrice"
//                   min="0"
//                   max="200"
//                   value={filters.maxPrice}
//                   onChange={handleFilterChange}
//                   className="search-results-range"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="search-results-list">
//             {filteredBuses.length > 0 ? (
//               filteredBuses.map((bus) => (
//                 <div key={bus.id} className="search-results-item">
//                   <div className="search-results-item-header">
//                     <div>
//                       <h3 className="search-results-item-title">{bus.type} Bus</h3>
//                       <p className="search-results-item-details">
//                         Departure: {bus.departureTime} | Arrival: {bus.arrivalTime}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="search-results-item-price">₹{bus.price}</p>
//                       <p className="search-results-item-seats">{bus.seatsAvailable} seats left</p>
//                     </div>
//                   </div>
//                   <button
//                     className={`search-results-item-button ${
//                       bus.seatsAvailable > 0 ? 'available' : 'sold-out'
//                     }`}
//                     disabled={bus.seatsAvailable <= 0}
//                     onClick={() => handleBookNow(bus)}
//                   >
//                     {bus.seatsAvailable > 0 ? 'Book Now' : 'Sold Out'}
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <div className="no-buses-message">
//                 <p>No buses found matching your criteria.</p>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
import React, { useState } from 'react';
import './SearchResults.css';
import SeatSelection from './SeatSelection';
import Confirmation from './Confirmation';
import Payment from './Payment';

const SearchResults = ({ source, destination, date, passengers, busData }) => {
  const [filters, setFilters] = useState({
    busType: '',
    maxPrice: 200, // Default max price
  });
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookNow = (bus) => {
    setSelectedBus(bus);
  };

  const handleConfirmSeats = (seats) => {
    setSelectedSeats(seats);
  };

  const handleProceedToPayment = () => {
    setShowPayment(true);
  };

  const filteredBuses = busData.filter((bus) => {
    const matchesType = !filters.busType || bus.type === filters.busType;
    const matchesPrice = bus.price <= filters.maxPrice;
    return matchesType && matchesPrice;
  });

  return (
    <div className="search-results-container">
      {showPayment ? (
        <Payment bus={selectedBus} selectedSeats={selectedSeats} />
      ) : selectedSeats.length > 0 && selectedBus ? (
        <Confirmation 
          bus={selectedBus} 
          selectedSeats={selectedSeats} 
          onBack={() => {
            setSelectedSeats([]);
            setSelectedBus(null);
          }}
          onProceedToPayment={handleProceedToPayment}
        />
      ) : selectedBus ? (
        <SeatSelection 
          bus={selectedBus} 
          onBack={() => setSelectedBus(null)} 
          onConfirm={handleConfirmSeats}
        />
      ) : (
        <>
          <div className="search-results-header">
            <h2 className="search-results-title">
              Buses from {source} to {destination}
            </h2>
            <div className="search-results-filters">
              <div className="search-results-filter">
                <label>Bus Type</label>
                <select
                  name="busType"
                  value={filters.busType}
                  onChange={handleFilterChange}
                  className="search-results-select"
                >
                  <option value="">All Types</option>
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non-AC</option>
                </select>
              </div>
              <div className="search-results-filter">
                <label>Maximum Price</label>
                <select
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="search-results-select"
                >
                  <option value="100">Up to ₹100</option>
                  <option value="200">Up to ₹200</option>
                  <option value="300">Up to ₹300</option>
                  <option value="500">Up to ₹500</option>
                </select>
              </div>
            </div>
          </div>
          <div className="search-results-list">
            {filteredBuses.length > 0 ? (
              filteredBuses.map((bus) => (
                <div key={bus.id} className="search-results-item">
                  <div className="search-results-item-header">
                    <div>
                      <h3 className="search-results-item-title">{bus.type} Bus</h3>
                      <p className="search-results-item-details">
                        Departure: {bus.departureTime} | Arrival: {bus.arrivalTime}
                      </p>
                    </div>
                    <div>
                      <p className="search-results-item-price">₹{bus.price}</p>
                      <p className="search-results-item-seats">{bus.seatsAvailable} seats left</p>
                    </div>
                  </div>
                  <button
                    className={`search-results-item-button ${
                      bus.seatsAvailable > 0 ? 'available' : 'sold-out'
                    }`}
                    disabled={bus.seatsAvailable <= 0}
                    onClick={() => handleBookNow(bus)}
                  >
                    {bus.seatsAvailable > 0 ? 'Book Now' : 'Sold Out'}
                  </button>
                </div>
              ))
            ) : (
              <div className="no-buses-message">
                <p>No buses found matching your criteria.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;

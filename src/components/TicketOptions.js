
import React, { useState } from 'react';
import SearchResults from './SearchResults';
import './TicketOptions.css';

const TicketOptions = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
    const [showResults, setShowResults] = useState(false);
    const [busData, setBusData] = useState([]);

    const handleSearch = () => {
        if (source && destination) {
            const newBusData = generateBusData(source, destination);
            setBusData(newBusData);
            setShowResults(true);
        }
    };

    const generateBusData = (from, to) => {
        const busTypes = ['AC', 'Non-AC'];
        const buses = [];
        
        const numBuses = Math.floor(Math.random() * 3) + 4;

        for (let i = 0; i < numBuses; i++) {
            const departureHour = 6 + Math.floor(Math.random() * 14);
            const durationHours = 1 + Math.floor(Math.random() * 3);
            
            const departureTime = `${departureHour.toString().padStart(2, '0')}:${['00', '30'][Math.floor(Math.random() * 2)]} ${departureHour < 12 ? 'AM' : 'PM'}`;
            const arrivalHour = (departureHour + durationHours) % 24;
            const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${['00', '30'][Math.floor(Math.random() * 2)]} ${arrivalHour < 12 ? 'AM' : 'PM'}`;
            
            const busType = busTypes[Math.floor(Math.random() * busTypes.length)];
            const basePrice = busType === 'AC' ? 150 : 100;
            const priceVariation = Math.floor(Math.random() * 50);

            buses.push({
                id: i + 1,
                from: from,
                to: to,
                departureTime: departureTime,
                arrivalTime: arrivalTime,
                price: basePrice + priceVariation,
                type: busType,
                seatsAvailable: Math.floor(Math.random() * 30) + 10
            });
        }

        return buses.sort((a, b) => {
            const timeA = convertTo24Hour(a.departureTime);
            const timeB = convertTo24Hour(b.departureTime);
            return timeA - timeB;
        });
    };

    const convertTo24Hour = (timeStr) => {
        const [time, period] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        return hours * 60 + minutes;
    };

    if (showResults) {
        return (
            <SearchResults 
                source={source}
                destination={destination}
                date={date}
                passengers={passengers}
                busData={busData}
            />
        );
    }

    return (
        <div id="ticket-options-container">
            <h2 id="ticket-options-title">Search for Buses</h2>
            <div id="ticket-options-form">
                <div className="flex flex-col">
                    <input
                        type="text"
                        id="source"
                        placeholder="Source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="ticket-options-input"
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="text"
                        id="destination"
                        placeholder="Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="ticket-options-input"
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="ticket-options-input"
                    />
                </div>
                <div id="ticket-options-passengers">
                    <div>
                        <label className="ticket-options-label" htmlFor="adults">
                            Adults:
                        </label>
                        <input
                            type="number"
                            id="adults"
                            min="1"
                            value={passengers.adults}
                            onChange={(e) => setPassengers({ ...passengers, adults: parseInt(e.target.value) })}
                            className="ticket-options-input"
                        />
                    </div>
                    <div>
                        <label className="ticket-options-label" htmlFor="children">
                            Children:
                        </label>
                        <input
                            type="number"
                            id="children"
                            min="0"
                            value={passengers.children}
                            onChange={(e) => setPassengers({ ...passengers, children: parseInt(e.target.value) })}
                            className="ticket-options-input"
                        />
                    </div>
                    <div>
                        <label className="ticket-options-label" htmlFor="infants">
                            Infants:
                        </label>
                        <input
                            type="number"
                            id="infants"
                            min="0"
                            value={passengers.infants}
                            onChange={(e) => setPassengers({ ...passengers, infants: parseInt(e.target.value) })}
                            className="ticket-options-input"
                        />
                    </div>
                </div>
                <button 
                    onClick={handleSearch}
                    className="ticket-options-button"
                >
                    Search Buses
                </button>
            </div>
        </div>
    );
};

export default TicketOptions;

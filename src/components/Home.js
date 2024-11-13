// import React, { useState } from 'react';
// import TicketOptions from './TicketOptions'; // Import the new component
// import './Home.css';

// const Home = () => {
//     const [isNavigated, setIsNavigated] = useState(false); // State to handle navigation
//     const [journeyDetails, setJourneyDetails] = useState({
//         source: '',
//         destination: '',
//         date: ''
//     });

//     const handleGetTicketsClick = () => {
//         setIsNavigated(true); // Navigate to ticket options
//     };

//     const handleJourneyDetailChange = (e) => {
//         const { name, value } = e.target;
//         setJourneyDetails((prevDetails) => ({
//             ...prevDetails,
//             [name]: value
//         }));
//     };

//     const handleAddJourneyClick = () => {
//         // Send journey details to the backend
//         fetch('http://localhost:3000/journeys', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(journeyDetails)
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 alert(`Journey added: ${data.source} to ${data.destination} on ${data.date}`);
//                 setJourneyDetails({ source: '', destination: '', date: '' }); // Reset the fields after adding
//             })
//             .catch((error) => {
//                 console.error('Error adding journey:', error);
//                 alert('Failed to add journey. Please try again.');
//             });
//     };

//     if (isNavigated) {
//         return <TicketOptions />; // Render the TicketOptions component if navigated
//     }

//     return (
//         <div className="home-container">
//             <div className="get-new-tickets-section">
//                 <h2 className="get-tickets-title">Get Tickets Online Easily and Securely</h2>
//                 <button className="get-tickets-btn" onClick={handleGetTicketsClick}>
//                     Get Tickets Now
//                 </button>
//             </div>
//             <div className="add-journey-section">
//                 <h2 className="add-journey-title">Add Your Journey Details</h2>
//                 <div className="journey-details">
//                     <label className="journey-label" htmlFor="source">Departure City:</label>
//                     <input
//                         className="journey-input"
//                         type="text"
//                         id="source"
//                         name="source"
//                         value={journeyDetails.source}
//                         onChange={handleJourneyDetailChange}
//                         placeholder="Enter your departure city"
//                     />
                    
//                     <label className="journey-label" htmlFor="destination">Arrival City:</label>
//                     <input
//                         className="journey-input"
//                         type="text"
//                         id="destination"
//                         name="destination"
//                         value={journeyDetails.destination}
//                         onChange={handleJourneyDetailChange}
//                         placeholder="Enter your destination"
//                     />
                    
//                     <label className="journey-label" htmlFor="date">Date of Journey:</label>
//                     <input
//                         className="journey-input"
//                         type="date"
//                         id="date"
//                         name="date"
//                         value={journeyDetails.date}
//                         onChange={handleJourneyDetailChange}
//                     />
//                 </div>
//                 <button className="add-journey-btn" onClick={handleAddJourneyClick}>
//                     Add Journey
//                 </button>
//             </div>
//             <div className="steps-section">
//                 <h2 className="steps-title">Steps to Book Your Ticket</h2>
//                 <div className="steps-container">
//                     <div className="step-item">
//                         <span className="step-icon">🔍</span>
//                         <div className="step-content">
//                             <h3 className="step-item-title">Search for Buses</h3>
//                             <p className="step-item-description">Find the best bus options tailored to your travel needs.</p>
//                         </div>
//                     </div>
//                     <div className="step-item">
//                         <span className="step-icon">🎟️</span>
//                         <div className="step-content">
//                             <h3 className="step-item-title">Select Your Ticket</h3>
//                             <p className="step-item-description">Choose the perfect seat and ticket type for you.</p>
//                         </div>
//                     </div>
//                     <div className="step-item">
//                         <span className="step-icon">💳</span>
//                         <div className="step-content">
//                             <h3 className="step-item-title">Make a Secure Payment</h3>
//                             <p className="step-item-description">Complete your purchase with our secure payment options.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
import React, { useState } from 'react';
import TicketOptions from './TicketOptions'; // Import the TicketOptions component
import './Home.css';

const Home = () => {
    const [isNavigated, setIsNavigated] = useState(false); // State to handle navigation
    const [journeyDetails, setJourneyDetails] = useState({
        source: '',
        destination: '',
        date: ''
    });

    // New state variables
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGetTicketsClick = () => {
        setIsNavigated(true); // Navigate to TicketOptions
    };

    const handleJourneyDetailChange = (e) => {
        const { name, value } = e.target;
        setJourneyDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };
    const handleAddJourneyClick = () => {
        const { source, destination, date } = journeyDetails;
        if (!source || !destination || !date) {
            alert('Please fill out all fields before adding the journey.');
            return;
        }
    
        setLoading(true);
        setSuccessMessage('');
    
        fetch('http://localhost:3000/journeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(journeyDetails)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to add journey. Status: ${response.status}`);
                }
                return response.json();  // Proceed if the response is JSON
            })
            .then((data) => {
                setSuccessMessage(`Journey added: ${data.source} to ${data.destination} on ${data.date}`);
                setJourneyDetails({ source: '', destination: '', date: '' });
            })
            .catch((error) => {
                console.error('Error adding journey:', error.message);
                alert(`Failed to add journey: ${error.message}`);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    

    if (isNavigated) {
        return <TicketOptions />; // Render TicketOptions component if navigated
    }

    return (
        <div className="home-container">
            <div className="get-new-tickets-section">
                <h2 className="get-tickets-title">Get Tickets Online Easily and Securely</h2>
                <button className="get-tickets-btn" onClick={handleGetTicketsClick}>
                    Get Tickets Now
                </button>
            </div>
            <div className="add-journey-section">
                <h2 className="add-journey-title">Add Your Journey Details</h2>
                <div className="journey-details">
                    <label className="journey-label" htmlFor="source">Departure City:</label>
                    <input
                        className="journey-input"
                        type="text"
                        id="source"
                        name="source"
                        value={journeyDetails.source}
                        onChange={handleJourneyDetailChange}
                        placeholder="Enter your departure city"
                    />
                    
                    <label className="journey-label" htmlFor="destination">Arrival City:</label>
                    <input
                        className="journey-input"
                        type="text"
                        id="destination"
                        name="destination"
                        value={journeyDetails.destination}
                        onChange={handleJourneyDetailChange}
                        placeholder="Enter your destination"
                    />
                    
                    <label className="journey-label" htmlFor="date">Date of Journey:</label>
                    <input
                        className="journey-input"
                        type="date"
                        id="date"
                        name="date"
                        value={journeyDetails.date}
                        onChange={handleJourneyDetailChange}
                    />
                </div>
                <button className="add-journey-btn" onClick={handleAddJourneyClick} disabled={loading}>
                    {loading ? 'Adding...' : 'Add Journey'}
                </button>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
            <div className="steps-section">
                <h2 className="steps-title">Steps to Book Your Ticket</h2>
                <div className="steps-container">
                    <div className="step-item">
                        <span className="step-icon">🔍</span>
                        <div className="step-content">
                            <h3 className="step-item-title">Search for Buses</h3>
                            <p className="step-item-description">Find the best bus options tailored to your travel needs.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <span className="step-icon">🎟️</span>
                        <div className="step-content">
                            <h3 className="step-item-title">Select Your Ticket</h3>
                            <p className="step-item-description">Choose the perfect seat and ticket type for you.</p>
                        </div>
                    </div>
                    <div className="step-item">
                        <span className="step-icon">💳</span>
                        <div className="step-content">
                            <h3 className="step-item-title">Make a Secure Payment</h3>
                            <p className="step-item-description">Complete your purchase with our secure payment options.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

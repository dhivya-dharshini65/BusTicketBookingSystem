import React, { Component } from 'react';

export class WelcomePage extends Component {
    render() {
        return (
            <div className="welcome-container">
                <header className="welcome-header">
                    <h1>Welcome to BusTicketBookingSystem</h1>
                    <p>Plan your next journey with ease. Book bus tickets quickly, and travel hassle-free.</p>
                    
                </header>
            </div>
        );
    }
}

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: '',
        };
    }

    componentDidMount() {
        const now = new Date().getHours();
        if (now < 12) this.setState({ greeting: 'Good Morning' });
        else if (now < 18) this.setState({ greeting: 'Good Afternoon' });
        else this.setState({ greeting: 'Good Evening' });

    }

    render() {
        const { greeting } = this.state;
        const { onNavigateToBookTicket, userProfile} = this.props;
        return (
            <div className="home-container">
                <header className="home-header">
                    <h1>{greeting}, {userProfile ? userProfile.name : 'Guest'}!</h1>
                    <p>Here's the latest bus status</p>
                    <button onClick={onNavigateToBookTicket} className="home-button">
                        Book Your Ticket
                    </button>
                </header>
            </div>
        );
    }
}

export class BookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NAME: props.userProfile ? props.userProfile.name : '',
            start: '',
            destination: '',
            date: '',
            tickets: '',
            showModal: false,
        };
    }
 
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showModal: true });
    };

    confirmBooking = () => {
        const { NAME, start, destination, date, tickets } = this.state;
        this.props.onBookingSubmit({ NAME, start, destination, date, tickets });
        this.props.onNavigateToMyBookings();
        this.setState({ showModal: false });
    };

    render() {
        const { NAME, start, destination, date, tickets, showModal } = this.state;
        return (
            <div className="page book-ticket-page">
                <section className="featured-products">
                    <div className="container">
                        <h2>BUSES AVAILABLE</h2>
                        <div className="product-grid">
                            {[
                                { id: 1, name: 'SLEEPER BUS', image: 'https://5.imimg.com/data5/GL/IG/MY-23979835/bus-air-conditioning-service-500x500.jpg' },
                                { id: 2, name: 'AC BUS', image: 'https://cpimg.tistatic.com/08283967/b/4/Non-AC-40-Seater-Bus-Body.jpg?tr=w300' },
                                { id: 3, name: 'NON-AC BUS', image: 'https://image.made-in-china.com/2f0j00bsNlYKrGHfgo/Engine-Driven-Integrated-Roof-Mounted-Cheap-High-Quality-Big-Bus-Air-Conditioning-System.jpg' },
                            ].map((product) => (
                                <div key={product.id} className="product-card">
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <button className="btn-primary">Book Ticket</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <br />
                <h2>Book Your Ticket</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={NAME}
                        onChange={(e) => this.setState({ NAME: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Start"
                        value={start}
                        onChange={(e) => this.setState({ start: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Destination"
                        value={destination}
                        onChange={(e) => this.setState({ destination: e.target.value })}
                        required
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => this.setState({ date: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Number of Tickets"
                        value={tickets}
                        onChange={(e) => this.setState({ tickets: e.target.value })}
                        required
                    />
                    <button type="submit">Book Now</button>
                </form>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Booking Summary</h3>
                            <p><strong>Name:</strong> {NAME}</p>
                            <p><strong>From:</strong> {start}</p>
                            <p><strong>To:</strong> {destination}</p>
                            <p><strong>Date:</strong> {date}</p>
                            <p><strong>Tickets:</strong> {tickets}</p>
                            <button onClick={this.confirmBooking} className="btn-primary">Confirm Booking</button>
                            <button onClick={() => this.setState({ showModal: false })} className="btn-secondary">Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export class MyBookings extends Component {
    render() {
        const { bookings } = this.props;
        return (
            <div className="page my-bookings-page">
                <h2>My Bookings</h2>
                <div className="booking-list">
                    {bookings.length === 0 ? (
                        <p>No bookings made yet.</p>
                    ) : (
                        bookings.map((booking, index) => (
                            <div key={index} className="booking-item">
                                <p><strong>Name:</strong> {booking.NAME}</p>
                                <p><strong>From:</strong> {booking.start}</p>
                                <p><strong>To:</strong> {booking.destination}</p>
                                <p><strong>Date:</strong> {booking.date}</p>
                                <p><strong>Tickets:</strong> {booking.tickets}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }
}
export class AboutUs extends Component {
    render() {
        return (
            <div className="about-us-container">
                <h1>About Us</h1>
                <p>
                    Welcome! We are committed to providing you with the best online bus ticket booking service. Our goal is to offer a fast, easy, and secure way for passengers to book bus tickets from the comfort of their homes.
                </p>
                <p>
                    With a wide network of routes, affordable fares, and a user-friendly interface, we make traveling easier for everyone. Whether you're going on a short trip or a long journey, we strive to deliver a hassle-free experience.
                </p>
                <p>
                    Thank you for choosing us. We look forward to serving you.
                </p>
            </div>
        );
    }
}






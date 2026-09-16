import { useState } from "react";

function EventBooking() {

    // Form State
    const [eventName, setEventName] = useState("");
    const [eventType, setEventType] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [guests, setGuests] = useState("");
    const [venue, setVenue] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Submission State
    const [submitted, setSubmitted] = useState(false);

    // Validation State
    const [errors, setErrors] = useState({});

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset previous messages
        setSubmitted(false);
        setErrors({});

        const newErrors = {};

        // Required field validation
        if (!eventName.trim()) {
            newErrors.eventName = "Event name is required.";
        }

        if (!eventType) {
            newErrors.eventType = "Please select an event type.";
        }

        if (!eventDate) {
            newErrors.eventDate = "Please select an event date.";
        }

        if (!guests) {
            newErrors.guests = "Number of guests is required.";
        } else if (Number(guests) <= 0) {
            newErrors.guests = "Number of guests must be greater than 0.";
        }

        if (!venue.trim()) {
            newErrors.venue = "Venue is required.";
        }

        if (!customerName.trim()) {
            newErrors.customerName = "Your name is required.";
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Phone validation
        const phonePattern = /^[0-9]{10}$/;

        if (!phone) {
            newErrors.phone = "Phone number is required.";
        } else if (!phonePattern.test(phone)) {
            newErrors.phone = "Please enter a valid 10-digit phone number.";
        }

        // If validation fails
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If validation is successful
        console.log("Event Booking Submitted");

        console.log({
            eventName,
            eventType,
            eventDate,
            guests,
            venue,
            customerName,
            email,
            phone
        });

        // Show success message on website
        setSubmitted(true);

        // Reset form fields
        setEventName("");
        setEventType("");
        setEventDate("");
        setGuests("");
        setVenue("");
        setCustomerName("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="event-booking-page">

            <h1>Book Your Event</h1>

            <p>
                Fill in the details below to plan and book your event.
            </p>

            {/* Success Message */}
            {submitted && (
                <div className="booking-success">
                    <h3>Event Booking Submitted!</h3>

                    <p>
                        Your event booking details have been submitted successfully.
                    </p>
                </div>
            )}

            <form
                className="event-booking-form"
                onSubmit={handleSubmit}
            >

                {/* Event Name */}
                <div className="form-group">
                    <label htmlFor="eventName">
                        Event Name
                    </label>

                    <input
                        id="eventName"
                        type="text"
                        placeholder="Enter event name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />

                    {errors.eventName && (
                        <p className="validation-error">
                            {errors.eventName}
                        </p>
                    )}
                </div>

                {/* Event Type */}
                <div className="form-group">
                    <label htmlFor="eventType">
                        Event Type
                    </label>

                    <select
                        id="eventType"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                    >
                        <option value="">Select event type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday Party</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Conference">Conference</option>
                        <option value="Other">Other</option>
                    </select>

                    {errors.eventType && (
                        <p className="validation-error">
                            {errors.eventType}
                        </p>
                    )}
                </div>

                {/* Event Date */}
                <div className="form-group">
                    <label htmlFor="eventDate">
                        Event Date
                    </label>

                    <input
                        id="eventDate"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />

                    {errors.eventDate && (
                        <p className="validation-error">
                            {errors.eventDate}
                        </p>
                    )}
                </div>

                {/* Number of Guests */}
                <div className="form-group">
                    <label htmlFor="guests">
                        Number of Guests
                    </label>

                    <input
                        id="guests"
                        type="number"
                        placeholder="Enter number of guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />

                    {errors.guests && (
                        <p className="validation-error">
                            {errors.guests}
                        </p>
                    )}
                </div>

                {/* Venue */}
                <div className="form-group">
                    <label htmlFor="venue">
                        Venue
                    </label>

                    <input
                        id="venue"
                        type="text"
                        placeholder="Enter preferred venue"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                    />

                    {errors.venue && (
                        <p className="validation-error">
                            {errors.venue}
                        </p>
                    )}
                </div>

                {/* Customer Name */}
                <div className="form-group">
                    <label htmlFor="customerName">
                        Your Name
                    </label>

                    <input
                        id="customerName"
                        type="text"
                        placeholder="Enter your name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />

                    {errors.customerName && (
                        <p className="validation-error">
                            {errors.customerName}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">
                        Email Address
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {errors.email && (
                        <p className="validation-error">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div className="form-group">
                    <label htmlFor="phone">
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    {errors.phone && (
                        <p className="validation-error">
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="booking-button"
                >
                    Book Event
                </button>

            </form>

        </div>
    );
}

export default EventBooking;
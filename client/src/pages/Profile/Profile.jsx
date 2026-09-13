import { useState } from "react";

function Profile() {
    const [eventName, setEventName] = useState("");

    return (
        <div>
            <h1>Event Media</h1>

            <p>
                Explore photos, videos and memorable moments
                from our events and celebrations.
            </p>

            <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name"
            />

            <p>Event Name: {eventName}</p>
        </div>
    );
}

export default Profile;
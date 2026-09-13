function Welcome({ name, project }) {
    return (
        <div className="welcome-card">
            <h2>Welcome, {name}!</h2>
            <p>{project}</p>
        </div>
    );
}

export default Welcome;
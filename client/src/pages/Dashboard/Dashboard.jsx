import { useState } from "react";
import Button from "../../components/ui/Button";

function Dashboard() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Our Suppliers</h1>

            <p>
                Find trusted suppliers and professional services
                for your perfect event.
            </p>

            <h2>Selected Suppliers: {count}</h2>

            <Button onClick={() => setCount(count + 1)}>
                Add Supplier
            </Button>
        </div>
    );
}

export default Dashboard;
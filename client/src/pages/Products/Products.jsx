import Card from "../../components/ui/Card";

function Products() {
    return (
        <div className="products-page">
            <h1>Products</h1>
            <p>Explore our products.</p>

            <div className="card-grid">
                <Card
                    title="Smartphone"
                    description="Latest smartphone with modern features."
                />

                <Card
                    title="Laptop"
                    description="Powerful laptop for work and entertainment."
                />

                <Card
                    title="Headphones"
                    description="Enjoy clear and immersive sound."
                />

                <Card
                    title="Smart Watch"
                    description="Track your activities and stay connected."
                />
            </div>
        </div>
    );
}

export default Products;
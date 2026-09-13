import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Products() {
    return (
        <div className="products-page">

            <PageTitle
                title="Our Venues"
                description="Find the perfect venue for your wedding, celebration, conference or special event."
            />

            <div className="card-grid">

                <Card
                    title="Wedding Venues"
                    description="Beautiful spaces designed for your special day."
                />

                <Card
                    title="Banquet Halls"
                    description="Elegant halls for weddings, parties and celebrations."
                />

                <Card
                    title="Resort Venues"
                    description="Relaxing and scenic locations for memorable events."
                />

                <Card
                    title="Outdoor Venues"
                    description="Open-air spaces perfect for unique celebrations."
                />

            </div>
        </div>
    );
}

export default Products;
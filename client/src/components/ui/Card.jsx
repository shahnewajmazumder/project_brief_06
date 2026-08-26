function Card({ title, description, children }) {
    return (
        <div className="ui-card">
            {title && <h3 className="ui-card-title">{title}</h3>}

            {description && (
                <p className="ui-card-description">
                    {description}
                </p>
            )}

            {children && (
                <div className="ui-card-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Card;
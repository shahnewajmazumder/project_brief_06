function PageTitle({ title, description }) {
    return (
        <div className="ui-page-title">
            <h1>{title}</h1>

            {description && <p>{description}</p>}
        </div>
    );
}

export default PageTitle;
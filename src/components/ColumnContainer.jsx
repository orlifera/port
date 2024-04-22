function ColumnContainer(props) {
    const { column } = props;
    return (
        <div className="column">
            <div className="column-title">
                { column.title }
            </div>
            <div className="column-content">
                Content
            </div>
            <div className="column-footer">
                Footer
            </div>
        </div>

    )
}

export default ColumnContainer
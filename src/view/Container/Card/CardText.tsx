import './css/Card.css';

function CardText({ columnName, value }: { columnName: string, value: string|number }) {
    return (
        <div className="CardText" >
            <p>{columnName}</p>
            <p>{value}</p>
        </div>
    );
}

export default CardText;

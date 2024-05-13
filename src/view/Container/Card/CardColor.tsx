import React from 'react';
import './css/Card.css';

interface CardColorProps {
    value: string;
}

const CardColor: React.FC<CardColorProps> = ({ value }) => {
    return (
        <div className="CardText" >

        <p>Цвет: </p>
    <div className="CardColor" style={{ backgroundColor: value, width: '40px', height: '40px' }} />
        </div>
    );
}

export default CardColor;

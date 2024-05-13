import React, { useState } from 'react';
import './css/HeadFirstRow.css';
import car from '../img/car.png'; // Путь к изображению

function HeadFirstRow() {

    return (
        <div className="FirstRowContainer">
            <p className="HeadText">
                Мой автопарк
            </p>
            <img src={car} alt="logo" className={"carImage"}/>


        </div>
    );
}

export default HeadFirstRow;

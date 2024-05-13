import React, { useState } from 'react';
import './css/Card.css';
import car from '../img/car-sil.jpg';
import CardText from './CardText';
import { Vehicle } from '../model/Model';
import OverlayEditForm from './OverlayEditForm';
import OverlayMap from './OverlayMap'; // Импортируем компонент OverlayMap
import ViewModel from '../viewmodel/ViewModel';
import editImage from "../img/edit.png"
import CardColor from "./CardColor";
interface CardProps {
    card_info: Vehicle;
}

const Card: React.FC<CardProps> = ({ card_info }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showMap, setShowMap] = useState(false); // Добавляем состояние для отображения карты

    const viewModel = ViewModel.getInstance();

    const handleOverlayOpen = () => {
        setShowOverlay(true);
    };
    const handleMapOpen = () => {
        setShowMap(true); // При нажатии на кнопку "Посмотреть карту" показываем карту
    };

    const handleOverlayClose = () => {
        setShowOverlay(false);
    };

    const handleDeleteCard = () => {
        const cardContainer = document.getElementById(`card-${card_info.id}`);
        if (cardContainer) {
            cardContainer.classList.add("slide-out-animation");
            setTimeout(() => {
                viewModel.deleteVehicle(card_info.id);
                cardContainer.classList.remove("slide-out-animation");
            }, 300);
        }
    };

    const handleSave = () => {
        setShowOverlay(false);
    };

    const handleCancel = () => {
        setShowOverlay(false);
    };

    return (
        <div id={`card-${card_info.id}`} className="CardContainer">
            <button className="closeButton" onClick={handleDeleteCard}>&times;</button>
            <img className="editButton" onClick={handleOverlayOpen} src={editImage} alt="edit"/>


            <img src={car} alt="default" className="DefaultCar"/>
            <CardText columnName={'Имя:'} value={card_info.name + ' ' + card_info.model}/>
            <CardText columnName={'Год:'} value={card_info.year}/>
            <CardColor value={card_info.color}/>
            <CardText columnName={'Цена:'} value={card_info.price}/>
            <button onClick={handleMapOpen}> {/* Добавляем обработчик на кнопку "Посмотреть карту" */}
                <p>Посмотреть карту</p>
            </button>
            {showOverlay && (
                <OverlayEditForm
                    onClose={handleOverlayClose}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    vehicle={card_info}
                />
            )}
            {showMap && ( // Отображаем карту только если showMap === true
                <OverlayMap
                    onClose={() => setShowMap(false)} // Обработчик для закрытия карты
                    vehicle={card_info}
                />
            )}
        </div>
    );
};

export default Card;

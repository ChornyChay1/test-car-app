import React, { useRef, useEffect } from 'react';
import './css/OverlayEditForm.css';
import { Vehicle } from '../model/Model';
import ViewModel from '../viewmodel/ViewModel'; // Импортируем ViewModel

interface OverlayEditFormProps {
    onClose: () => void;
    onSave: () => void;
    onCancel: () => void;
    vehicle: Vehicle;
}

const OverlayEditForm: React.FC<OverlayEditFormProps> = ({ onClose, onSave, onCancel, vehicle }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const viewModel = ViewModel.getInstance(); // Создаем экземпляр ViewModel

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                onCancel();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onCancel]);

    const handleSave = () => {
        const updatedVehicle: Vehicle = {
            ...vehicle,
            name: (document.getElementById('name') as HTMLInputElement).value,
            year: parseInt((document.getElementById('year') as HTMLInputElement).value),
            color: (document.getElementById('color') as HTMLInputElement).value,
            price: parseInt((document.getElementById('price') as HTMLInputElement).value),
        };
        const index = viewModel.getInfo().findIndex(v => v.id === vehicle.id); // Находим индекс транспортного средства в массиве информации
        viewModel.editVehicle(index, updatedVehicle); // Вызываем метод editVehicle
        onSave();
        onClose();
    };

    return (
        <div className="overlay">
            <div className="overlay-content" ref={overlayRef}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Форма редактирования</h2>
                {/* Здесь может быть ваша форма редактирования */}
                <label>Имя:</label>
                <input id="name" type="text" defaultValue={vehicle.name} />
                <label>Год:</label>
                <input id="year" type="text" defaultValue={vehicle.year.toString()} />
                <label>Цвет:</label>
                <input id="color" type="text" defaultValue={vehicle.color} />
                <label>Цена:</label>
                <input id="price" type="text" defaultValue={vehicle.price.toString()} />
                <button className="saveButton" onClick={handleSave}>Сохранить</button>
            </div>
        </div>
    );
};

export default OverlayEditForm;

import React, { useRef, useEffect, useState } from 'react';
import './css/OverlayMap.css';
import { Vehicle } from '../model/Model';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import ViewModel from "../viewmodel/ViewModel";
 interface OverlayMapProps {
    onClose: () => void;
    vehicle: Vehicle;
}

const OverlayMap: React.FC<OverlayMapProps> = ({ onClose, vehicle }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const viewModel = ViewModel.getInstance(); // Создаем экземпляр ViewModel
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="overlay">
            <div className="overlay-content" ref={overlayRef}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Карта</h2>
                <div className="map-container">
                    <YMaps>
                        <div>
                            <Map className="map" defaultState={{ center: [vehicle.latitude, vehicle.longitude], zoom: 17 }} >
                                <Placemark
                                    geometry={[vehicle.latitude, vehicle.longitude]}
                                />
                            </Map>

                        </div>

                    </YMaps>
                </div>
            </div>
        </div>
    );
};

export default OverlayMap;

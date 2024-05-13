import React, { useState, useEffect } from 'react';
import img from '../img/car.png';
import   "./css/MovingImage.css";

interface MovingImageProps {
    onImageLoad: (value: boolean) => void;
}

function MovingImage({ onImageLoad }: MovingImageProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
            onImageLoad(false); // Вызываем функцию обратного вызова после завершения загрузки
        }, 2000); // Задержка в 2 секунды для имитации загрузки

        return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    }, [onImageLoad]);

    return (
        <div id="pot" className="potContainer">
            <img
                src={img}
                alt="Placeholder"
                className="images"
            />
        </div>
    );
}

export default MovingImage;

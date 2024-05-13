import React, { useState } from 'react';
import './css/OptionsRow.css';
import car from '../img/car.png';
import ViewModel from "../viewmodel/ViewModel"; // Импортируем ViewModel

interface HeadFirstRowProps {
    onContainerStateChange: () => void;
}

function OptionsRow({ onContainerStateChange }: HeadFirstRowProps) {
    const [sortingOption, setSortingOption] = useState('default');
    const [loading, setLoading] = useState(false); // Состояние для отслеживания состояния загрузки

    const handleSortChange = async (option: string) => {
        console.log('Выбранная опция для сортировки:', option);
        setSortingOption(option);
        setLoading(true); // Устанавливаем состояние загрузки в true

        const viewModel = ViewModel.getInstance(); // Создаем экземпляр ViewModel

        // Применяем выбранную опцию сортировки
        if (option === 'year') {
            await viewModel.sortByYear();
        } else if (option === 'cost') {
            await viewModel.sortByPrice();
        } else if (option === "default") {
            await viewModel.fetchDataFromModel();
        }

        setLoading(false); // Устанавливаем состояние загрузки в false после завершения операции
        onContainerStateChange(); // Вызываем функцию изменения состояния родительского контейнера
    };

    return (
        <div className="dropdown">
            <button className="dropbtn">Сортировка</button>
            <div className="dropdown-content">
                <span onClick={() => handleSortChange('default')}>Нет</span>
                <span onClick={() => handleSortChange('year')}>Год выпуска</span>
                <span onClick={() => handleSortChange('cost')}>Стоимость</span>
            </div>
            {loading && <div className="progress-bar">Загрузка...</div>} {/* Отображаем прогресс-бар при состоянии загрузки */}
        </div>
    );
}

export default OptionsRow;

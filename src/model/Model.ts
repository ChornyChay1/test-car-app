import React, { useState, useEffect } from 'react';
import './css/App.css';
import HeadOfApp from "./HeadOfApp";
import Container from "./Container";
import ViewModel from "../viewmodel/ViewModel"; // Импортируем ViewModel
import { Vehicle } from "../model/Model"; // Импортируем интерфейс Vehicle из модели

function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]); // Создаем состояние для хранения информации о транспортных средствах

    useEffect(() => {
        const viewModel = ViewModel.getInstance();

        // Функция обработки обновления информации о транспортных средствах
        const handleModelUpdate = (info: Vehicle[]) => {
            setVehicles(info); // Обновляем состояние vehicles при получении новых данных из ViewModel
        };

        viewModel.addObserver(handleModelUpdate); // Добавляем обработчик обновления в ViewModel

        // Вызываем функцию fetchData() при монтировании компонента App
        viewModel.fetchDataFromModel();

        // Удаление обработчика при размонтировании компонента
        return () => {
            viewModel.removeObserver(handleModelUpdate);
        };
    }, []);

    return (
        <div className="App">
        <HeadOfApp/>
        <Container vehicles={vehicles}/> {/* Передаем информацию о транспортных средствах в Container */}
    </div>
);
}

export default App;

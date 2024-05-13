import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../Card';
import ViewModel from '../../viewmodel/ViewModel';

describe('Card', () => {
    const mockCardInfo = {
        id: 1,
        name: 'Car',
        model: 'Model',
        year: 2022,
        color: 'red',
        price: 10000,
        longitude:3.3,
        latitude:3.2
    };

    it('should render without crashing', () => {
        render(<Card card_info={mockCardInfo} />);
    });


 });

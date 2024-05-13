import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OverlayEditForm from '../OverlayEditForm';
import ViewModel from '../../viewmodel/ViewModel';

// Mock ViewModel getInstance method
jest.mock('../../viewmodel/ViewModel', () => {
    const mockEditVehicle = jest.fn();
    const mockGetInstance = jest.fn(() => ({
        editVehicle: mockEditVehicle,
    }));
    return {
        __esModule: true,
        default: {
            getInstance: mockGetInstance,
        },
    };
});

describe('OverlayEditForm', () => {
    const mockVehicle = {
        id: 1,
        model: 'car',
        name: 'Car',
        year: 2022,
        color: 'red',
        price: 10000,
        latitude: 3.3,
        longitude: 3.5
    };

    it('should render without crashing', () => {
        render(<OverlayEditForm onClose={() => {}} onSave={() => {}} onCancel={() => {}} vehicle={mockVehicle} />);
    });

});

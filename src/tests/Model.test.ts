import Model, { Vehicle } from './Model';

describe('Model', () => {
    let model: Model;

    beforeEach(() => {
        model = Model.getInstance();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch data successfully', async () => {
        const mockData: Vehicle[] = [
            {
                id: 1,
                name: 'Toyota',
                model: 'Camry',
                year: 2020,
                color: 'Red',
                price: 25000,
                latitude: 50.1234,
                longitude: 30.5678
            }
        ];

        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData)
        });

        await model.fetchData();

        expect(model.getInfo()).toEqual(mockData);
    });

    it('should handle fetch data error', async () => {
        const errorMessage = 'Failed to fetch data';
        global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage));

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        await model.fetchData();

        expect(consoleSpy).toHaveBeenCalledWith('Error fetching data:', new Error(errorMessage));
    });

    it('should add observer and notify observers', () => {
        const observerMock = jest.fn();
        model.addObserver(observerMock);

        const data: Vehicle[] = [
            {
                id: 1,
                name: 'Toyota',
                model: 'Camry',
                year: 2020,
                color: 'Red',
                price: 25000,
                latitude: 50.1234,
                longitude: 30.5678
            }
        ];

        model['notifyObservers']();

        expect(observerMock).toHaveBeenCalledWith(data);
    });
});

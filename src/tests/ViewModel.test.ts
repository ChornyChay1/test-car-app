import Model from "../model/Model";
import ViewModel from "./ViewModel";
import { Vehicle } from "../model/Model";


 describe("ViewModel", () => {
    let viewModel: ViewModel;

    beforeEach(() => {
        viewModel = ViewModel.getInstance();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it("should handle model update", () => {
        const info: Vehicle[] = [{ id: 1, name: "Car", model: "Model", year: 2020, color: "red", price: 10000, latitude: 0, longitude: 0 }];
        viewModel["handleModelUpdate"](info);
        expect(viewModel.getInfo()).toEqual(info);
    });

    it("should sort vehicles by year", () => {
        const info: Vehicle[] = [
            { id: 1, name: "Car1", model: "Model", year: 2020, color: "red", price: 10000, latitude: 0, longitude: 0 },
            { id: 2, name: "Car2", model: "Model", year: 2018, color: "blue", price: 15000, latitude: 0, longitude: 0 },
            { id: 3, name: "Car3", model: "Model", year: 2019, color: "green", price: 12000, latitude: 0, longitude: 0 }
        ];
        viewModel["info"] = info;
        viewModel.sortByYear();
        expect(viewModel.getInfo()).toEqual([
            { id: 2, name: "Car2", model: "Model", year: 2018, color: "blue", price: 15000, latitude: 0, longitude: 0 },
            { id: 3, name: "Car3", model: "Model", year: 2019, color: "green", price: 12000, latitude: 0, longitude: 0 },
            { id: 1, name: "Car1", model: "Model", year: 2020, color: "red", price: 10000, latitude: 0, longitude: 0 }
        ]);
    });

 });

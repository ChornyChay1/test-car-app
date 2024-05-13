import './css/Container.css';
import Card from "./Card";
import { Vehicle } from "../model/Model";

interface ContainerProps {
    vehicles: Vehicle[];
}

function Container({ vehicles }: ContainerProps) {
    return (
        <div className="FragmentContainer">
            {vehicles.map(vehicle => (
                <Card card_info={vehicle} />
            ))}
        </div>
    );
}

export default Container;

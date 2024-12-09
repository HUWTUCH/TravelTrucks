import {FiltersContainer} from "../../../app/styles/styled-components.tsx";
import {VehicleEquipment} from "../../../features/VehicleEquipment";
import {VehicleType} from "../../../features/VehicleType";


export const Filters = () => {
    return (
        <FiltersContainer>
            <p>Filters</p>
            <VehicleEquipment/>
            <VehicleType/>
        </FiltersContainer>
    );
};

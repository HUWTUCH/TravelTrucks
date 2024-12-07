import {FiltersContainer} from "../../styled-components/styled-components.tsx";
import {VehicleEquipment} from "../../VehicleEquipment";
import {VehicleType} from "../../VehicleType";


export const Filters = () => {
    return (
        <FiltersContainer>
            <p>Filters</p>
            <VehicleEquipment/>
            <VehicleType/>
        </FiltersContainer>
    );
};

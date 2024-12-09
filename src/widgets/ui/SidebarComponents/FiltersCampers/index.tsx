import {FiltersContainer} from "../../../../app/styles/styled-components.tsx";
import {VehicleEquipment} from "../../../../features/ui/VehicleEquipment";
import {VehicleType} from "../../../../features/ui/VehicleType";


export const Filters = () => {
    return (
        <FiltersContainer>
            <p>Filters</p>
            <VehicleEquipment/>
            <VehicleType/>
        </FiltersContainer>
    );
};

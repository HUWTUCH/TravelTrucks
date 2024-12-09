import {FiltersContainer} from "../../../../app/styles/styled-components.tsx";
import {VehicleEquipment} from "../../../../features/get-campers/ui/VehicleEquipment";
import {VehicleType} from "../../../../features/get-campers/ui/VehicleType";


export const Filters = () => {
    return (
        <FiltersContainer>
            <p>Filters</p>
            <VehicleEquipment/>
            <VehicleType/>
        </FiltersContainer>
    );
};

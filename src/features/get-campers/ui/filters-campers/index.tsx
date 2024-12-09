import {FiltersContainer} from "../../../../shared/ui/styled-components.tsx";
import {VehicleEquipment} from "../vehicle-equipment";
import {VehicleType} from "../vehicle-type";


export const Filters = () => {
    return (
        <FiltersContainer>
            <p>Filters</p>
            <VehicleEquipment/>
            <VehicleType/>
        </FiltersContainer>
    );
};

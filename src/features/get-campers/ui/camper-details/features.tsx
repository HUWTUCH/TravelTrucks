import {useOutletContext} from "react-router-dom";
import {FeaturesAmenities} from "../features/features-amenities.tsx";
import {FeaturesBlock, VehicleDetails} from "../../../../shared/ui/styled-components.tsx";
import {Camper} from "../../../../entities/camper/types.ts";

export const Features = () => {
    const { camper } = useOutletContext<{ camper: Camper }>();
    const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1).toLowerCase();

    return (
        <FeaturesBlock>
            <FeaturesAmenities itemFeatures={camper}/>
            <VehicleDetails>
                <h1>Vehicle details</h1>
                <p style={{width: 527, height: 1, backgroundColor: 'rgba(218, 221, 225, 1)', marginBottom: 24}}/>
                <p>From<span>{capitalize(camper.form)}</span></p>
                <p>Length<span>{camper.length}</span></p>
                <p>Width<span>{camper.width}</span></p>
                <p>Height<span>{camper.height}</span></p>
                <p>Tank<span>{camper.tank}</span></p>
                <p>Consumption<span>{camper.consumption}</span></p>
            </VehicleDetails>
        </FeaturesBlock>
    );
}

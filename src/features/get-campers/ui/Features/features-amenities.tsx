import {FeaturesContainer, FeaturesItem, FeaturesList} from "../../../../app/styles/styled-components.tsx";
import KitchenIcon from '../../../../shared/assets/images/icons/kitchen.svg';
import ACIcon from '../../../../shared/assets/images/icons/ac.svg';
import RadioIcon from '../../../../shared/assets/images/icons/radio.svg';
import GasIcon from '../../../../shared/assets/images/icons/gas.svg';
import BathroomIcon from '../../../../shared/assets/images/icons/bathroom.svg';
import RefrigeratorIcon from '../../../../shared/assets/images/icons/refrigerator.svg';
import WaterIcon from '../../../../shared/assets/images/icons/water.svg';
import MicrowaveIcon from '../../../../shared/assets/images/icons/microwave.svg';
import TVIcon from '../../../../shared/assets/images/icons/tv.svg'
import {getActiveFilter} from "../../lib/getActiveFilter.ts";

interface FeaturesAmenitiesProps {
    itemFeatures?: {
        id: number;
        name: string;
        price: number;
        rating: number;
        location: string;
        description: string;
        engine: string;
        transmission: string;
        kitchen: boolean;
        AC: boolean;
        radio: boolean;
        gas: boolean;
        bathroom: boolean;
        refrigerator: boolean;
        water: boolean;
        microwave: boolean;
        gallery: { thumb: string; original: string }[];
        reviews: { reviewer_name: string; reviewer_rating: number; comment: string }[]
    }
}

const featureIcons: Record<string, string> = {
    kitchen: KitchenIcon,
    AC: ACIcon,
    radio: RadioIcon,
    gas: GasIcon,
    bathroom: BathroomIcon,
    refrigerator: RefrigeratorIcon,
    water: WaterIcon,
    microwave: MicrowaveIcon,
    TV: TVIcon,
};
export const FeaturesAmenities = ({itemFeatures}: FeaturesAmenitiesProps) => {
    const activeFeatures = getActiveFilter(itemFeatures);
    return (
        <FeaturesContainer>
            {activeFeatures.length > 0 ? (
                <FeaturesList>
                    {activeFeatures.slice(0, 7).map((feature, index) => (
                        <FeaturesItem key={index}>
                            <img
                                src={featureIcons[feature]}
                                alt={feature}
                                style={{width: "24px", height: "24px"}}
                            />
                            {feature}
                        </FeaturesItem>
                    ))}
                </FeaturesList>
            ) : (
                <p>No features available</p>
            )}
        </FeaturesContainer>
    );
}

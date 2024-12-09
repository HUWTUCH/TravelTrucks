export interface Camper {
    consumption: any;
    tank: any;
    height: any;
    width: any;
    length: any;
    form: string;
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
    gallery: {
        thumb: string;
        original: string;
    }[];
    reviews: {
        reviewer_name: string;
        reviewer_rating: number;
        comment: string;
    }[];
}
export interface MainCampersProps {
    campers: Camper[];
}
export interface FeaturesAmenitiesProps {
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
export interface SidebarProps {
    setCampers: (camper: {
        id: number; name: string; price: number; rating: number;
        description: string;
        location: string; gallery: { thumb: string; original: string }[];
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
        reviews: {
            reviewer_name: string,
            reviewer_rating: number,
            comment: string,
        }[],
    }[]) => void,
}

export const initialValues = {
    vehicleEquipment: [] as string[],
    vehicleType: '' as string,
    location: '' as string,
}

export interface CampersResult {
    total: number,
    items: {
        id: number,
        name: string,
        price: number,
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
        gallery: {
            thumb: string,
            original: string,
        }[],
        reviews: {
            reviewer_name: string,
            reviewer_rating: number,
            comment: string,
        }[],
    } []
}

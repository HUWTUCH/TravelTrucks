import {CatalogContainer} from "../../app/styles/styled-components.tsx";
import {Sidebar} from "../../widgets/SidebarComponents/SidebarFilter";
import {MainCampers} from "../../features/CatalogCampers";
import {useState} from "react";

interface Camper {
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


export const Catalog = () => {
    const [campers, setCampers] = useState<Camper[]>([]);
    return (
        <CatalogContainer>
            <Sidebar setCampers={setCampers}/>
            <MainCampers campers={campers}/>
        </CatalogContainer>
    );
}

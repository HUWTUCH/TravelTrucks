import {CatalogContainer} from "../../components/styled-components/styled-components.tsx";
import {Sidebar} from "../../components/SidebarFilter";
import {MainCampers} from "../../components/CatalogCampers";
import {useState} from "react";

interface Camper {
    id: number;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    gallery: { thumb: string; original: string; }[];
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

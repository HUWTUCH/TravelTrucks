import {CatalogContainer} from "../../shared/ui/styled-components.tsx";
import {Sidebar} from "../../features/get-campers/ui/sidebar-filter";
import {MainCampers} from "../../features/get-campers/ui/catalog-campers";
import {useState} from "react";
import {Camper} from "../../entities/camper/types.ts";


export const Catalog = () => {
    const [campers, setCampers] = useState<Camper[]>([]);
    return (
        <CatalogContainer>
            <Sidebar setCampers={setCampers}/>
            <MainCampers campers={campers}/>
        </CatalogContainer>
    );
}

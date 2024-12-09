import {CatalogContainer} from "../../app/styles/styled-components.tsx";
import {Sidebar} from "../../widgets/SidebarComponents/SidebarFilter";
import {MainCampers} from "../../features/CatalogCampers";
import {useState} from "react";
import {Camper} from "../../entities/types.ts";


export const Catalog = () => {
    const [campers, setCampers] = useState<Camper[]>([]);
    return (
        <CatalogContainer>
            <Sidebar setCampers={setCampers}/>
            <MainCampers campers={campers}/>
        </CatalogContainer>
    );
}

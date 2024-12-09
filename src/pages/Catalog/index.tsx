import {CatalogContainer} from "../../app/styles/styled-components.tsx";
import {Sidebar} from "../../widgets/ui/SidebarComponents/SidebarFilter";
import {MainCampers} from "../../features/get-campers/ui/CatalogCampers";
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

import {FilterSidebar, SearchButton} from "../../../../shared/ui/styled-components.tsx";
import {Location} from "../campers-location";
import {Filters} from "../filters-campers";
import {Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {Camper, CampersResult, initialValues} from "../../../../entities/camper/types.ts";
import {useFetch} from "../../../../shared/lib/hooks/use-fetch.tsx";

export interface SidebarProps {
    setCampers: (camper: Camper[]) => void;
}

export const Sidebar = ({
                            setCampers,
                        }: SidebarProps) => {
    const [valuesFilters, setValuesFilters] = useState<typeof initialValues>(initialValues);
    const [location, setLocation] = useState('');
    const getQuery = (filters: typeof initialValues) => {
        const queryParams: string[] = [];

        filters.vehicleEquipment.forEach((equipment) => {
            queryParams.push(equipment === 'transmission' ? `${equipment}=automatic` : `${equipment}=true`);
        });
        if (filters.vehicleType) {
            queryParams.push(`form=${filters.vehicleType}`);
        }

        if (filters.location) {
            queryParams.push(`location=${filters.location}`);
        }
        return `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${queryParams.join('&')}`;
    };

    const {data} = useFetch<CampersResult>(getQuery(valuesFilters));
    useEffect(() => {
        if (data && data.items) {
            setCampers(data.items);
            console.log('data', data);
        }
    }, [data]);
    const handleSubmit = (values: any) => {
        console.log('values', values)
        setValuesFilters({...values, location});
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <FilterSidebar>
                        <Location setLocation={setLocation}/>
                        <Filters/>
                        <SearchButton type='submit'>
                            <p>Search</p>
                        </SearchButton>
                    </FilterSidebar>
                </Form>
            </Formik>
        </>
    );
}

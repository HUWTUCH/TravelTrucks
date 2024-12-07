import {FilterSidebar, SearchButton} from "../styled-components/styled-components.tsx";
import {Location} from "../SidebarComponents/CampersLocation";
import {Filters} from "../SidebarComponents/FiltersCampers";
import {Form, Formik} from "formik";
import {useFetch} from "../../lib/hooks/use-fetch.ts";
import {useEffect, useState} from "react";

interface SidebarProps {
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

const initialValues = {
    vehicleEquipment: [] as string[],
    vehicleType: '' as string,
    location: '' as string,
}

interface CampersResult {
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

export const Sidebar = ({
                            setCampers,
                        }: SidebarProps) => {
    const [valuesFilters, setValuesFilters] = useState<typeof initialValues>(initialValues);
    const [location, setLocation] = useState('');
    // Функція для формування запиту на основі вибраних значень
    const getQuery = (filters: typeof initialValues) => {
        const queryParams: string[] = [];

        // Перевіряємо наявність вибраних значень у vehicleEquipment і додаємо їх як параметри
        filters.vehicleEquipment.forEach((equipment) => {
            queryParams.push(equipment === 'transmission' ? `${equipment}=automatic` : `${equipment}=true`);
        });
        // Якщо є вибраний тип транспорту, додаємо його як параметр
        if (filters.vehicleType) {
            queryParams.push(`form=${filters.vehicleType}`);
        }

        if (filters.location) {
            queryParams.push(`location=${filters.location}`);
        }
        // Повертаємо сформований запит, якщо є параметри
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

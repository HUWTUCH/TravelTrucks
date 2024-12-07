import {LocationInput, LocationsContainer} from "../../styled-components/styled-components.tsx";
import locationIcon from "../../../assets/images/icons/location_icon.png"
import * as React from "react";
import {Field} from "formik";

interface LocationProps {
    setLocation: (value: string) => void
}

export const Location = ({setLocation}: LocationProps) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };


    return (
        <LocationsContainer>
            <p>Location</p>
            <LocationInput>
                <img src={locationIcon}/>
                <Field type='text' name='city' placeholder='City' onChange={handleInputChange}/>
            </LocationInput>
        </LocationsContainer>
    );
};

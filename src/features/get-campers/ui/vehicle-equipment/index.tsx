import {
    Line,
    VehicleButton,
    VehicleContainerButtons,
    VehicleEquipmentContainer
} from "../../../../shared/ui/styled-components.tsx";
import ac from '../../../../shared/assets/images/icons/ac.svg'
import automatic from '../../../../shared/assets/images/icons/automatic.svg'
import kitchen from '../../../../shared/assets/images/icons/kitchen.svg'
import tv from '../../../../shared/assets/images/icons/tv.svg'
import bathroom from '../../../../shared/assets/images/icons/bathroom.svg'
import {useField} from "formik";

interface vehicleOptions {
    id: string;
    img: string;
    label: string;
}

const vehicleOptions: vehicleOptions[] = [
    {id: 'AC', img: ac, label: 'AC'},
    {id: 'transmission', img: automatic, label: 'Automatic'},
    {id: 'kitchen', img: kitchen, label: 'Kitchen'},
    {id: 'TV', img: tv, label: 'TV'},
    {id: 'bathroom', img: bathroom, label: 'Bathroom'},
];

export const VehicleEquipment = () => {
    const [field, _ , helpers] = useField<string[]>('vehicleEquipment');
    const {value} = field;
    const {setValue} = helpers;

    const handleActiveButtonsVehicle = (id: string) => {
        const newEquipment = value.includes(id) ? value.filter((item) => item !== id) : [...value, id]
        setValue(newEquipment);
    };
    return (
        <VehicleEquipmentContainer>
            <p>Vehicle equipment</p>
            <Line/>
            <VehicleContainerButtons>
                {vehicleOptions.map(option => (
                    <VehicleButton
                        key={option.id}
                        type='button'
                        onClick={() => handleActiveButtonsVehicle(option.id)}
                        isActive={value.includes(option.id)}
                    >
                        <img src={option.img} alt={option.label}/>
                        <p>{option.label}</p>
                    </VehicleButton>
                ))}
            </VehicleContainerButtons>
        </VehicleEquipmentContainer>
    );
};

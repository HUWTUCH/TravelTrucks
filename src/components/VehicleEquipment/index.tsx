import {
    Line,
    VehicleButton,
    VehicleContainerButtons,
    VehicleEquipmentContainer
} from "../styled-components/styled-components.tsx";
import ac from '../../assets/images/icons/ac.svg'
import automatic from '../../assets/images/icons/automatic.svg'
import kitchen from '../../assets/images/icons/kitchen.svg'
import tv from '../../assets/images/icons/tv.svg'
import bathroom from '../../assets/images/icons/bathroom.svg'
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
    // const [isActiveBtn, setIsActiveBtn] = useState<string[]>([]);
    const [field, _ , helpers] = useField<string[]>('vehicleEquipment');
    const {value} = field;
    const {setValue} = helpers;

    const handleActiveButtonsVehicle = (id: string) => {
        const newEquipment = value.includes(id) ? value.filter((item) => item !== id) : [...value, id]
        // setIsActiveBtn((prevActiveButtons) =>
        //     prevActiveButtons.includes(id)
        //         ? prevActiveButtons.filter((btnId) => btnId !== id) // Видаляємо ID, якщо він уже є
        //         : [...prevActiveButtons, id] // Додаємо ID, якщо його немає
        // );

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

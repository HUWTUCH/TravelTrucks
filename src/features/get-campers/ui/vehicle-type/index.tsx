import {
    Line,
    VehicleButton,
    VehicleContainerButtons,
    VehicleTypeContainer
} from "../../../../shared/ui/styled-components.tsx";
import van from '../../../../shared/assets/images/icons/van.svg';
import fullyIntegrated from '../../../../shared/assets/images/icons/fully-integrated.png';
import alcove from '../../../../shared/assets/images/icons/alcove.png';
import {useField} from "formik";

interface vehicleOptions {
    id: string;
    img: string;
    label: string;
}

const vehicleOptionsTypes: vehicleOptions[] = [
    {id: 'panelTruck', img: van, label: 'Van'},
    {id: 'fullyIntegrated', img: fullyIntegrated, label: 'Fully integrated'},
    {id: 'alcove', img: alcove, label: 'Alcove'},
];

export const VehicleType = () => {
    const [field, _, helpers] = useField<string>('vehicleType');
    const {value} = field;
    const {setValue} = helpers;

    const handleActiveButtonsVehicle = (id: string) => {
        setValue(id);
    };

  return (
      <VehicleTypeContainer>
          <p>Vehicle equipment</p>
          <Line/>
          <VehicleContainerButtons>
              {vehicleOptionsTypes.map(type => (
                  <VehicleButton
                      key={type.id}
                      type='button'
                      onClick={() => handleActiveButtonsVehicle(type.id)}
                      isActive={value === type.id}>
                      <img src={type.img} alt={type.label}/>
                      <p>{type.label}</p>
                  </VehicleButton>
              ))}
          </VehicleContainerButtons>
      </VehicleTypeContainer>
  );
}

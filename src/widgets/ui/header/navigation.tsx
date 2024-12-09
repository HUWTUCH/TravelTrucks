import {NavLink} from "react-router-dom";
import logoImage from '../../../shared/assets/images/Logo.png'
import {BasketIcon, Nav, NavHeader} from "../../../shared/ui/styled-components.tsx";
import basketIcon from '../../../shared/assets/images/icons/camper-basket.png'

export const Navigation = () => {
    return (
        <NavHeader>
            <img src={logoImage}/>
            <Nav>
                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'noActive')}>Home</NavLink>
                <NavLink to={'/campers'} className={({ isActive }) => (isActive ? 'active' : 'noActive')}>Catalog</NavLink>
                <NavLink to={'/basket-campers'} className='basketItem'>
                    <BasketIcon src={basketIcon}/>
                </NavLink>
            </Nav>
        </NavHeader>
    );
}

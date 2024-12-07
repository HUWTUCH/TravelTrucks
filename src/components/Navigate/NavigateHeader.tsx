import {NavLink} from "react-router-dom";
import logoImage from '../../assets/images/Logo.png'
import {BasketIcon, Nav, NavHeader} from "../styled-components/styled-components.tsx";
import basketIcon from '../../assets/images/icons/camper-basket.png'

export const NavigateHeader = () => {
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

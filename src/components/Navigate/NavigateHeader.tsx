import {NavLink} from "react-router-dom";
import logoImage from '../../assets/images/Logo.png'
import {Nav, NavHeader} from "../styled-components/styled-components.tsx";

export const NavigateHeader = () => {
    return (
        <NavHeader>
            <img src={logoImage}/>
            <Nav>
                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'noActive')}>Home</NavLink>
                <NavLink to={'/catalog'} className={({ isActive }) => (isActive ? 'active' : 'noActive')}>Catalog</NavLink>
            </Nav>
        </NavHeader>
    );
}

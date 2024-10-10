import {NavLink} from "react-router-dom";

export const NavigateHeader = () => {
  return (
      <>
          <nav>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/catalog'}>Catalog</NavLink>
          </nav>
      </>
  );
}

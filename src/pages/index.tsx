import {Route, Routes} from "react-router-dom";
import {Home} from "./HomePage/HomePage.tsx";
import {Catalog} from "./CatalogPage/CatalogPage.tsx";
import {Basket} from "./BasketPage/basket-campers-catalog.tsx";
import {Details} from "../features/ui/CamperDetails/CamperDetailsPage.tsx";
import {Features} from "../features/ui/CamperDetails/features.tsx";
import {Reviews} from "../features/ui/CamperDetails/reviews.tsx";
import {NotFound} from "./ErrorPage/Error.tsx";

export const Routing = () => {
  return (
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/campers'} element={<Catalog/>}/>
              <Route path={'/basket-campers'} element={<Basket/>}/>
              <Route path={'/campers/:id'} element={<Details/>}>
                  <Route index element={<Features/>}/>
                  <Route path={'features'} element={<Features/>}/>
                  <Route path={'reviews'} element={<Reviews/>}/>
              </Route>
              <Route path={'*'} element={<NotFound/>}/>
          </Routes>
  );
}

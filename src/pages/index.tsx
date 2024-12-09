import {Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {Catalog} from "./Catalog";
import {Basket} from "./Basket";
import {Details} from "./CamperDetails";
import {Features} from "../features/get-campers/ui/camper-details/features.tsx";
import {Reviews} from "../features/get-campers/ui/camper-details/reviews.tsx";
import {NotFound} from "./Error";

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

import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/HomePage/HomePage.tsx";
import {Catalog} from "./pages/CatalogPage/CatalogPage.tsx";
import {NotFound} from "./pages/ErrorPage/Error.tsx";
import {NavigateHeader} from "./components/Navigate/NavigateHeader.tsx";
import {Container} from "./components/styled-components/styled-components.tsx";
import './App.css'
import {Details} from "./components/CamperDetails/CamperDetailsPage.tsx";
import {Reviews} from "./components/CamperDetails/reviews.tsx";
import {Features} from "./components/CamperDetails/features.tsx";
import {Basket} from "./components/BasketCampers/basket-campers-catalog.tsx";

function App() {
  return (
    <Container>
        <NavigateHeader />
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/campers'} element={<Catalog />}/>
            <Route path={'/basket-campers'} element={<Basket />}/>
            <Route path={'/campers/:id'} element={<Details />}>
                <Route index element={<Features />} />
                <Route path={'features'} element={<Features />}/>
                <Route path={'reviews'} element={<Reviews />}/>
            </Route>
            <Route path={'*'} element={<NotFound />}/>
        </Routes>
    </Container>
  )
}

export default App

import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/HomePage/HomePage.tsx";
import {Catalog} from "./pages/CatalogPage/CatalogPage.tsx";
import {NotFound} from "./pages/ErrorPage/Error.tsx";
import {NavigateHeader} from "./components/Navigate/NavigateHeader.tsx";

function App() {

  return (
    <>
        <NavigateHeader />
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/catalog'} element={<Catalog />}/>
            <Route path={'*'} element={<NotFound />}/>
        </Routes>
    </>
  )
}

export default App

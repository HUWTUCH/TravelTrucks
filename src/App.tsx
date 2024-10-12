import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/HomePage/HomePage.tsx";
import {Catalog} from "./pages/CatalogPage/CatalogPage.tsx";
import {NotFound} from "./pages/ErrorPage/Error.tsx";
import {NavigateHeader} from "./components/Navigate/NavigateHeader.tsx";
import {Container} from "./components/styled-components/styled-components.tsx";
import './App.css'

function App() {

  return (
    <Container>
        <NavigateHeader />
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/catalog'} element={<Catalog />}/>
            <Route path={'*'} element={<NotFound />}/>
        </Routes>
    </Container>
  )
}

export default App

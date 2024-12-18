import {Navigation} from "../widgets/ui/header/navigation.tsx";
import {Container} from "../shared/ui/styled-components.tsx";
import './styles/App.css'
import {withRouter} from "./providers/with-router.tsx";
import {withRedux} from "./providers/width-redux.tsx";
import * as React from "react";
import {Routing} from "../pages";

const App: React.FC = () => {
    return (
        <Container>
            <Navigation/>
            <Routing />
        </Container>
    )
}

export default withRouter(withRedux(App));

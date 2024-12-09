import * as React from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = <P extends {}>(Component: React.ComponentType<P>): React.FC<P>  => {
    return (props: P) => (
        <BrowserRouter>
            <Component {...props} />
        </BrowserRouter>
    );
}

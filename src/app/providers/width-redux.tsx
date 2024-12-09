import * as React from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store.tsx";

export const withRedux = <P extends {}>(Component: React.ComponentType<P>): React.FC<P> => {
    return (props: P) => (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

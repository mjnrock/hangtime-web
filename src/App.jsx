import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Routes from "./routes/package";
import ScrollToTop from "./ScrollToTop";

const state = {};
export const Context = React.createContext(state);

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Context.Provider value={ state }>
                    <Switch>
                        <Route path="/host">
                            <Routes.Host />
                        </Route>
                        <Route path="/search">
                            <Routes.Search />
                        </Route>
                    </Switch>

                    <Link to="/host">Host</Link>
                    <Link to="/search">Search</Link>
                </Context.Provider>
            </ScrollToTop>
        </Router>
    );
}

export default App;
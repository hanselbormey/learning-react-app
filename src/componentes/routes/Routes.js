import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import NestedRoute1 from './NestedRoute1';
import NestedRoute2 from './NestedRoute2';

function Routes(props) {
    const { path, url } = useRouteMatch();
    debugger;

    return (
        <div>
            {/* <h1>Testing React Router</h1> */}
            <Switch>
                {console.log(path)}
                <Route exact path={path}>
                    <h3>Parent List</h3>
                    <ul>
                        <li><Link to={`${url}/nested-route-1`}>Nested route 1</Link></li>
                        <li><Link to={`${url}/nested-route-2`}>Nested route 2</Link></li>
                    </ul>
                </Route>
                <Route path={`${path}/nested-route-1`}>
                    <NestedRoute1 />
                </Route>
                <Route path={`${path}/nested-route-2`}>
                    <NestedRoute2 />
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
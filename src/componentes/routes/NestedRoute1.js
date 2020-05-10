import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function NestedRoute1(props) {

    return (
        <div style={{ margin: '8px', width: '40%', height: '40%', outline: '2px solid' }}>
            <h1>NestedRoute1</h1>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
        </div>
    );
}

export default NestedRoute1;
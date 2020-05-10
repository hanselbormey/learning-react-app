import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function NestedRoute2(props) {

    return (
        <div style={{ margin: '8px', width: '40%', height: '40%', outline: '2px solid' }}>
            <h1>NestedRoute2</h1>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>gggggggggggg hhhhhhhhhh iiiiiiiii jjjjjjjjj jjjjjjjj jjjjjjjjjj</p>
            <p>gggggggggggg hhhhhhhhhh iiiiiiiii jjjjjjjjj jjjjjjjj jjjjjjjjjj</p>
            <p>aaaaaaaaaaaa bbbbbbbbbb ccccccccc ddddddddd eeeeeeee ffffffffff</p>
            <p>zzzzzzzzzzzz yyyyyyyyyy  ddddddddd eeeeeeee ffffffffff</p>
        </div>
    );
}

export default NestedRoute2;
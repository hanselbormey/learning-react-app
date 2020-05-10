import React, { useState } from 'react';
import Teams from './Teams';

function Rating(props) {
    const [team, setTeam] = useState('');
    const [count, setCount] = useState('');

    return (
        <div>
            <h1>Testing React Context</h1>
            <Teams />
        </div>
    );
}

export default Rating;
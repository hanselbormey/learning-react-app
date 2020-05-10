import React, { useState } from 'react';
import { Context } from '../../context';

function Teams(props) {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    return (
        <Context.Consumer>
            {({ value, toggle }) => (
                <div style={{ border: '1px solid' }}>
                    {console.log(value)}
                    <h3>Teams - {value} [context.Api]</h3>
                    <div><ul><li>Team1</li><li>Team2</li><li>Team3</li><li>Team4</li></ul></div>
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="button" value="Change League" onClick={() => toggle(name)} style={{ margin: '8px' }} />
                    </div>
                </div>
            )}
        </Context.Consumer>
    );

}

export default Teams;
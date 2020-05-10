import React, { useState, memo } from 'react';
import { TextField } from '@material-ui/core';

const B = memo((props) => {
// const { name } = props;

    return (
        <div style={{ margin: '10px', border: '1px solid' }}>
            {console.log('JSX - B')}
            <div>CHILD-2</div>
            <TextField
                required
                id="child2"
                label="child2"
                value={props.name}
                name="child2"
                onChange={(e) => props.onChild2Change(e.target.value)}
                margin="normal"
                variant="outlined"
            />
        </div>
    );

});

export default B;
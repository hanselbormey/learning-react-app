import React, { useState, memo } from 'react';
import { TextField } from '@material-ui/core';

const A = memo((props) => {
const { name } = props;

    return (
        <div style={{ margin: '10px', border: '1px solid' }}>
            {console.log('JSX - A')}
            <div>CHILD-1</div>
            <TextField
                required
                id="child1"
                label="child1"
                value={name}
                name="child1"
                onChange={(e) => props.onChild1Change(e.target.value)}
                margin="normal"
                variant="outlined"
            />
        </div>
    );
});

export default A;
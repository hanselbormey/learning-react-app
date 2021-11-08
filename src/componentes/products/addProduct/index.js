import React from 'react';
import { Button } from '@material-ui/core';
import { Context } from '../../../Store';

export default function AddProduct(props) {
    const [state, dispatch] = React.useContext(Context);
    // const [state, dispatch] = React.useReducer(CartReducer, initialState);
    return (
        <div style={{ padding: '24px' }}>
            <h2>Add item to cart</h2>
            {state.count}
            <Button variant="contained" color="primary" onClick={() => dispatch({type: 'increment'})}>
                +
            </Button>
            <Button variant="contained" color="secondary" onClick={() => dispatch({type: 'decrement'})}>
                -
            </Button>
        </div>
    );
}

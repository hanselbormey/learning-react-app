import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
/* import ReactMultiCarousel from './ReactMultiCarousel'; */
import ReactScrolling from './ReactScrolling';


const useStyles = makeStyles({
    box: {
        height: '50px',
        width: '50px',
        border: '1px solid navy',
        backgroundColor: 'dodgerblue'
    },
    inputWidth: {
        width: 300,
        marginRight: '8px'
    }
});

function CustomIcons(props) {

    const classes = useStyles();

    return (
        <div style={{ padding: '25px' }}>
            <h1>Test carousel</h1>
            {/* <ReactMultiCarousel deviceType="desktop" /> */}
            <ReactScrolling />
        </div>
    );
}

export default CustomIcons;
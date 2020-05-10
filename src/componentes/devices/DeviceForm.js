import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography, Button, MenuItem, IconButton } from '@material-ui/core';
import { TextField, Divider } from '@material-ui/core';

import Tooltip from '@material-ui/core/Tooltip';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import API from '../../utils/Api';
import DeviceList from '../devices/DeviceList';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    inputWidth: {
        width: 300,
        marginRight: '8px'
    }
});

function DeviceForm(props) {
    const classes = useStyles();
    const { vendor, status } = props;

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <TextField
                required
                id="vendor"
                label="Vendor"
                value={vendor}
                name="name"
                onChange={(e) => props.onVendorChange(e.target.value)}
                margin="normal"
                variant="outlined"
                className={classes.inputWidth}
            />
            <TextField
                required
                id="status"
                select
                label="Status"
                value={status}
                name="status"
                onChange={(e) => props.onStatusChange(e.target.value)}
                margin="normal"
                variant="outlined"
                className={classes.inputWidth}
            >
            <MenuItem value="offline">offline</MenuItem>
            <MenuItem value="online">online</MenuItem>
          )}
            </TextField>
            <IconButton disabled={!(vendor && status)}>
               <CheckIcon onClick={() => props.onHandleSubmit()} />
            </IconButton>
            <CloseIcon onClick={() => props.onHandleCancel()}/>
        </div>
    );
}

export default DeviceForm;
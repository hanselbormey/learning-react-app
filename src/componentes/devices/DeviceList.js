import React, { useState, useEffect } from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { TextField, Divider } from '@material-ui/core';

import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import API from '../../utils/Api';

const useStyles = makeStyles( theme =>({
    table: {
        minWidth: 650,
    },
    inputWidth: {
        width: 300,
        marginRight: '8px'
    },
    highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
}));

function DeviceList(props) {
    const classes = useStyles();
    const { devices, selectedDevice } = props;

    return(
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Vendor</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {devices && devices.map(row => (
                            <TableRow className={selectedDevice && selectedDevice === row.uid ? classes.highlight  : ''} key={row.vendor}>
                                <TableCell component="th" scope="row">
                                    {row.vendor}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    <div>
                                        <Tooltip title="edit">
                                            <EditIcon
                                                color="action"
                                                onClick={() => props.onEdit(row.uid)}
                                            />
                                        </Tooltip>
                                        <Tooltip title="delete">
                                            <DeleteIcon
                                                color="action"
                                                onClick={() => props.onDelete(row.uid)}
                                            />
                                        </Tooltip>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DeviceList;
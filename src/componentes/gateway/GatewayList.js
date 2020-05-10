import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import API from '../../utils/Api';
import { withSnackbar } from 'notistack';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function GatewayList(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchGateways() {
            try {
                const response = await API.get('/gateways');
                const { data } = response;
                setData(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchGateways()
    }
        , []);

    const handleEdit = (id) => {
        const { history } = props;
        history.push(`/gateway-edit/${id}`);
    }

    const handleOnClickDelete = async (id) => {
        const { enqueueSnackbar } = props;
      try {
            await API.delete(`/gateways/${id}`);
            const response = await API.get('/gateways');
            const { data } = response;
            setData(data)
            enqueueSnackbar('Gateway removed', {
                variant: 'success'
              });
            
        } catch (error) {
            enqueueSnackbar(error, {
                variant: 'error'
              });
        }
    }


    return (
        <div style={{ padding: '16px' }}>
            <Typography>GatewayList</Typography>
            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <Button variant="contained" size="medium" color="primary" component={Link} to="/gateway-add" style={{ marginBottom: '10px' }}>Add</Button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">
                                    <div>
                                        <Tooltip title="edit">
                                            <EditIcon
                                                color="action"
                                                onClick={() => handleEdit(row.id)}
                                            />
                                        </Tooltip>
                                        <Tooltip title="delete">
                                            <DeleteIcon
                                                color="action"
                                                onClick={() => handleOnClickDelete(row.id)}
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

export default withSnackbar(GatewayList);
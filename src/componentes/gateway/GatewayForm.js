import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import API from '../../utils/Api';
import DeviceList from '../devices/DeviceList';
import DeviceForm from '../devices/DeviceForm';

import uuid from 'react-uuid';

const useStyles = makeStyles(theme =>({
    table: {
        minWidth: 650,
    },
    inputWidth: {
        width: 300,
        marginRight: '8px'
    },
   
}));

function GatewayForm(props) {
    const classes = useStyles();
    const { name, address, devices, match } = props;
    const [selectedDevice, setSelectedDevice] = useState('');
    const [vendor, setVendor] = useState('');
    const [status, setStatus] = useState('');
    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');
    // const [devices, setDevices] = useState([]);
    // const [date, setDate] = useState('');


    const handleOnClickDelete = (uid) => {
        alert('delete device');
    }

    const handleOnEdit = (uid) => {
        const device = devices.find(item => item.uid === uid);
        if (device) {
            const { vendor, status } = device;
            setSelectedDevice(uid);
            setVendor(vendor);
            setStatus(status);
        }
    }

    const onHandleSubmit = async () => {
        if(!selectedDevice) {
            // adding device
            // await API.post('/device', { vendor, status });
        }
        else {
            // editing device
            const index = devices.findIndex(item => item.uid === selectedDevice);
            if (index >= 0){
              // await API.put('/device', { vendor, status });
            }
        }
    };

    const onHandleCancel = () => {
        setVendor('');
        setStatus('');
        setSelectedDevice(null);
    }

    return (
        <div style={{ padding: '16px' }}>
            <TextField
                required
                id="name"
                label="Name"
                value={name}
                name="name"
                onChange={(e) => props.onNameChange(e.target.value)}
                margin="normal"
                variant="outlined"
                className={classes.inputWidth}
            />
            <TextField
                required
                id="address"
                label="Address"
                value={address}
                name="address"
                onChange={(e) => props.onAddressChange(e.target.value)}
                margin="normal"
                variant="outlined"
                className={classes.inputWidth}
            />
            <Typography gutterBottom>Devices</Typography>
            <DeviceForm
              vendor={vendor}
              status={status}
              onVendorChange={(value) => setVendor(value)}
              onStatusChange={(value) => setStatus(value)}
              onHandleSubmit={onHandleSubmit}
              onHandleCancel={onHandleCancel}/>
            <DeviceList devices={devices} selectedDevice={selectedDevice} onDelete={handleOnClickDelete} onEdit={handleOnEdit} />
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'row-reverse' }}>
                <Button variant="contained" size="medium" color="default" onClick={props.onCancelGateway} >Cancel</Button>
                <Button variant="contained" size="medium" color="primary" onClick={props.onSaveGateway} style={{ marginRight: '10px' }}>Save</Button>
            </div>
        </div>
    );
}

export default GatewayForm;
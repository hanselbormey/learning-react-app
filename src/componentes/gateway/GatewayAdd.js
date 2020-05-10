import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import API from '../../utils/Api';
import uuid from 'react-uuid';
import GatewayForm from './GatewayForm';
import { withSnackbar } from 'notistack';

const useStyles = makeStyles(theme =>({
    table: {
        minWidth: 650,
    },
    inputWidth: {
        width: 300,
        marginRight: '8px'
    },
   
}));

const ADDRESS_VALIDATOR = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

function GatewayAdd(props) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [devices, setDevices] = useState([]);
    
    const onSaveGateway = async () => {
        const { enqueueSnackbar, history } = props;
        if(!address.match(ADDRESS_VALIDATOR)) {
            enqueueSnackbar('The IP address is not valid', {
                variant: 'error'
              });
        } else {
            try {
                await API.post('/gateways', { id: uuid(), name, address, devices })
                enqueueSnackbar('Gateway created', {
                    variant: 'success'
                  });
             history.goBack();
                
            } catch (error) {
                enqueueSnackbar( error, {
                    variant: 'error'
                  });
            }
        }
    }

    const onCancelGateway = () => {
        const { history } = props;
        history.goBack();
      }

      const onDevicesChange = () => {
        alert('onDevicesChange');
      }

    return (
        <div style={{ padding: '16px' }}>
            <Typography>Add Gateway</Typography>
            <GatewayForm
              name={name}
              address={address}
              devices={devices}
              onNameChange={(value) => setName(value)}
              onAddressChange={(value) => setAddress(value)}
              onDevicesChange={onDevicesChange}
              onSaveGateway={onSaveGateway}
              onCancelGateway={onCancelGateway}
            />
        </div>
    );
}

export default withSnackbar(GatewayAdd);
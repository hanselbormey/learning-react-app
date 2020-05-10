import React, { useState, useEffect } from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
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

function GatewayEdit(props) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [devices, setDevices] = useState([]);
    const { match } = props;

    useEffect(() => {
        async function fetchGateway() {
            try {
                const response = await API.get(`/gateways/${match.params.id}`);
                const { data } = response;
                setName(data.name);
                setAddress(data.address);
                setDevices(data.devices);
            } catch (error) {
                console.log(error);
            }
        }
        fetchGateway()
    }, []);

    const onSaveGateway = async () => {
        const { enqueueSnackbar, history } = props;
        if(!address.match(ADDRESS_VALIDATOR)) {
            enqueueSnackbar('The IP address is not valid', {
                variant: 'error'
              });
        } else {
            try {
                await API.put(`/gateways/${match.params.id}`, { name, address, devices })
                enqueueSnackbar('Gateway edited', {
                    variant: 'success'
                  });
                history.goBack();
            } catch (error) {
                enqueueSnackbar(error, {
                    variant: 'error'
                  });
            }
        }
    }

    const onCancelGateway = () => {
        // alert('onCancelGateway');
        const { history } = props;
        history.goBack();
      }

      const onDevicesChange = () => {
        alert('onDevicesChange');
      }

    return (
        <div style={{ padding: '16px' }}>
            <Typography>Edit Gateway</Typography>
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

export default withSnackbar(GatewayEdit);
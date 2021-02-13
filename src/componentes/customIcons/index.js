import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, MenuItem, IconButton } from '@material-ui/core';
import { TextField, Divider } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import { TasksIcon, IntegrationsIcon, DevelopersIcon } from './icons';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    inputWidth: {
        width: 300,
        marginRight: '8px'
    }
});

function CustomIcons(props) {
    debugger;
    return (
        <div>
            <p>icons</p>
              <TasksIcon />
              <IntegrationsIcon />
              <DevelopersIcon />
        </div>
    );
  }

export default CustomIcons;
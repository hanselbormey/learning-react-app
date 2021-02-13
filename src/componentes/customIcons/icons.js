import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, MenuItem, IconButton } from '@material-ui/core';
import { TextField, Divider } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Tasks } from '../../icons/SideMenu/Side_menu_Tasks.svg';
import { ReactComponent as Integrations } from '../../icons/SideMenu/Side_menu_Integrations.svg';
import { ReactComponent as Developers } from '../../icons/SideMenu/Side_menu_Developers.svg';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    inputWidth: {
        width: 300,
        marginRight: '8px'
    }
});

export const TasksIcon = (props) => <SvgIcon {...props} component={Tasks} />;

export const IntegrationsIcon = (props) => <SvgIcon {...props} component={Integrations} />;

export const DevelopersIcon = (props) => <SvgIcon {...props} component={Developers} />;

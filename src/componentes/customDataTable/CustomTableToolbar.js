import React, { useEffect, useState } from "react";
import { IconButton, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FilterListIcon from '@material-ui/icons/FilterList';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1)
  },
  container: {
    marginBottom: theme.spacing(1),
  },
  secondarySection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));

const MultipleSelectionSection = ({ selectedRows }) => {

  const classes = useStyles();

  return (
    <Fragment>
      {selectedRows > 0 && (
        <div>
          <Divider variant="middle" />
          <div className={classes.secondarySection}>
            <div>{`${selectedRows} selected rows`}</div>
            <div>
              <LinkIcon />
              <LinkOffIcon />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default function CustomTableToolbar(props) {
  const { selectedRows } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <SearchIcon />
        <AddCircleOutlineIcon />
        <FilterListIcon />
      </div>
      <MultipleSelectionSection selectedRows={selectedRows} />
    </div>
  );
}
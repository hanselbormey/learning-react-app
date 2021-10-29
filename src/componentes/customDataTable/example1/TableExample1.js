import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Alert, AlertTitle } from '@material-ui/lab';
// import API from '../../utils/Api';
import { IconButton, Typography } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomTableToolbar from './CustomTableToolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            margin: theme.spacing(2),
        },
    },
}));

const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    /* { field: 'lastName', headerName: 'Last name', flex: 1 }, */
    /* {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    }, */
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow' },
    { id: 2, lastName: 'Lannister' },
    { id: 3, lastName: 'Lannister' },
    { id: 4, lastName: 'Stark' },
    { id: 5, lastName: 'Targaryen' },
    { id: 6, lastName: 'Melisandre' },
    { id: 7, lastName: 'Clifford' },
    { id: 8, lastName: 'Frances' },
    { id: 9, lastName: 'Roxie' },
  ];

/*   const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]; */
  
  export default function TableExample1() {

    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
       console.log(selectedRows);
    }, [selectedRows])

    return (
      <div style={{ height: 400, width: '100%', minWidth: '500px' }}>
        <CustomTableToolbar totalSelectedRows={selectedRows.length} />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableColumnMenu
          onSelectionChange={(newSelection) => {
            setSelectedRows(newSelection.rowIds);
          }}
          hideFooter
          hideFooterPagination
          hideFooterRowCount
          hideFooterSelectedRowCount
          />
      </div>
    );
  }
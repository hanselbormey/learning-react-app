import React, { useState } from 'react';
import AdvTable from './example2/AdvTable';
import TableExample1 from './example1/TableExample1';

let counter = 0;
function createData(name, calories, fat, carbsNum, protein) {
  counter += 1;
  return {
    id: counter,
    name,
    calories,
    fat,
    carbs: { carbs: carbsNum, origin: 'London' },
    protein
  };
}

function CustomDataTable() {
  // const selected = [];
  const [selected, setSelected] = useState([]);
  // const page = 0;
  // const rowsPerPage = 5;
  const defaultPerPage = 10;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterText, setFilterText] = useState('');
  const columnData = [
    {
      id: 'name',
      numeric: false,
      disablePadding: false,
      label: 'Dessert (100g serving)'
    }, {
      id: 'calories',
      numeric: false,
      disablePadding: false,
      label: 'Calories'
    },  {
      id: 'fat',
      numeric: false,
      disablePadding: false,
      label: 'Fat (g)'
    }, {
      id: 'carbs',
      numeric: false,
      disablePadding: false,
      label: 'Carbs',
      customRenderCell: (value) => <div>{value.origin}</div>
    },{
      id: 'actions',
      numeric: false,
      disablePadding: false,
      label: 'Actions',
      customRenderCell: () => <div>Button</div>
    }/*{
      id: 'carbs',
      numeric: true,
      disablePadding: true,
      label: 'Carbs (g)'
    }, {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)'
    }, */
  ];
  const [data, setData] = useState([
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1)));

  const handleChangeSelected = (payload) => setSelected(payload);

  const handleChangePage = (payload) => setPage(payload);

  const handleRowsPerPage = (payload) => setRowsPerPage(payload);

  const handleFilterText = (payload) => setFilterText(payload);

  const dispatch = (action) => {
    const { type, payload } = action;
    switch (type) {
      case 'SET_ORDER':
        console.log('SET_ORDER');
        break;
      case 'SET_ORDERBY':
        console.log('SET_ORDERBY');
        break;
      case 'SET_SELECTED':
        handleChangeSelected(payload);
        break;
      case 'CLICK_ROW':
        console.log('CLICK_ROW');
        break;
      case 'SET_DATA':
        console.log('SET_DATA');
        break;  
      case 'SET_PAGE':
        handleChangePage(payload);
        break;
      case 'SET_ROWSPERPAGE':
        handleRowsPerPage(payload);
        break;
      case 'SET_FILTERTEXT':
        handleFilterText(payload);
        break;
      default:
        return null;
    }
    return null;
  };

  return (
    <>
      <AdvTable
        selected={selected}
        data={data}
        totalRows={data.length}
        page={page}
        checkboxSelection={true}
        rowsPerPage={rowsPerPage}
        defaultPerPage={defaultPerPage}
        columnData={columnData}
        onChange={dispatch}
      />
      <TableExample1 />
    </>
  );
}

export default CustomDataTable;

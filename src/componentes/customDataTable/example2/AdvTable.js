import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableHead from './tableParts/TableHeader';
import EnhancedTableToolbar from './tableParts/TableToolbar';
import { delay, getColumnSpacing } from './TableUtils';
import EmptyData from './EmptyData';
import styles from './tableStyle-jss';

/* ESLint error https://github.com/yannickcr/eslint-plugin-react/issues/885 */
function AdvTable(props) {

  const [filterText, setFilterText] = useState('');
  const order = '';
  const orderBy = '';

  const {
    data, totalRows,
    selected,
    columnData, rowsPerPage, placeholderFilterText,
    page, checkboxSelection, classes, onChange
  } = props;

  const dispatch = (action) => onChange(action);

  /*   const handleRequestSort = (event, property) => {
    const orderByAlias = property;
    let orderLet = 'desc';
    if (orderBy === property && order === 'desc') {
      orderLet = 'asc';
    }

    const dataAlias = orderLet === 'desc'
      ? data.sort((a, b) => (b[orderByAlias] < a[orderByAlias] ? -1 : 1))
      : data.sort((a, b) => (a[orderByAlias] < b[orderByAlias] ? -1 : 1));

    dispatch({ type: 'SET_DATA', payload: dataAlias });
    dispatch({ type: 'SET_ORDER', payload: orderLet });
    dispatch({ type: 'SET_ORDERBY', payload: orderByAlias });
  }; */

  const handleSelectAllClick = (event, checked) => {
    if (checked) {
      dispatch({ type: 'SET_SELECTED', payload: data.map(n => n.id) });
    } else dispatch({ type: 'SET_SELECTED', payload: [] });
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    if (checkboxSelection) {
      dispatch({ type: 'SET_SELECTED', payload: newSelected });
    } else dispatch({ type: 'CLICK_ROW', payload: id });
  };

  const handleChangePage = useCallback((event, selectedPage) => {
    dispatch({ type: 'SET_PAGE', payload: selectedPage });
  }, []);

  const handleChangeRowsPerPage = useCallback(event => {
    dispatch({ type: 'SET_ROWSPERPAGE', payload: event.target.value });
  }, []);

  // eslint-disable-next-line
  const isSelected = id => selected.indexOf(id) !== -1;

  const handleUserInput = useCallback((value) => {
    setFilterText(value.toLowerCase());
    delay(() => dispatch({ type: 'SET_FILTERTEXT', payload: value.toLowerCase() }));
  }, []);

  const checkcell = checkboxSelection;
  const renderCustomCell = (render, id = '') => render(id);
  const renderCell = (dataArray, keyArray) => keyArray.map((itemCell, index) => (
    <TableCell align={itemCell.numeric ? 'right' : 'left'} key={index.toString()}>{itemCell.customRenderCell ? renderCustomCell(itemCell.customRenderCell, dataArray[itemCell.id]) : dataArray[itemCell.id]}</TableCell>
  ));
  return (
    <div className={classes.rootTable}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        filterText={filterText}
        onUserInput={handleUserInput}
        title=""
        placeholder={placeholderFilterText}
      />
      <div className={classes.tableWrapper}>
        <Table style={{ display: 'flex', flexDirection: 'column' }} className={classNames(classes.table, classes.stripped, classes.hover)}>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            /* onRequestSort={handleRequestSort} */
            rowCount={totalRows}
            columnData={columnData}
            checkcell={checkcell}
          />
          <TableBody>
            {data && data.map(n => {
              const flagSelected = isSelected(n.id);
              if (n.name.toLowerCase().indexOf(filterText) === -1) {
                return false;
              }
              return (
                <TableRow
                  onClick={event => handleClick(event, n.id)}
                  role="checkbox"
                  aria-checked={flagSelected}
                  tabIndex={-1}
                  key={n.id}
                  selected={flagSelected}
                  style={{ display: 'grid', gridTemplateColumns: getColumnSpacing(columnData.length, checkcell), width: '100%' }}
                >
                  {checkcell && (
                    <TableCell padding="checkbox">
                      <Checkbox checked={flagSelected} />
                    </TableCell>
                  )}
                  {renderCell(n, columnData)}
                </TableRow>
              );
            })}
            {totalRows === 0 && (
              <TableRow className={classes.emptyTable}>
                <EmptyData />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

AdvTable.defaultProps = {
  data: [],
  selected: [],
  columnData: [],
  rowsPerPage: 10,
  page: 0,
  totalRows: 0,
  placeholderFilterText: 'Search',
  checkboxSelection: false
};

AdvTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  totalRows: PropTypes.number,
  selected: PropTypes.array,
  columnData: PropTypes.array,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  checkboxSelection: PropTypes.bool,
  placeholderFilterText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(AdvTable);

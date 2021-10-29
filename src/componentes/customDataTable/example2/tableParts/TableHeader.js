import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import { getColumnSpacing } from '../TableUtils';

function TableHeader(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    columnData,
    checkcell,
    onRequestSort
  } = props;

  const createSortHandler = (event, property) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{ display: 'flex', width: '100%' }}>
      <TableRow style={{ display: 'grid', gridTemplateColumns: getColumnSpacing(columnData.length, checkcell), width: '100%' }}>
        {checkcell && (
          <TableCell padding="checkbox" width="80">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}
        {columnData.map(column => (
          <TableCell
          padding={column.disablePadding ? 'none' : 'default'}
          key={column.id}
          
          align={column.numeric ? 'right' : 'left'}
          sortDirection={orderBy === column.id ? order : false}
          >
            <Tooltip
              title="Sort"
              placement={column.numeric ? 'bottom-end' : 'bottom-start'}
              enterDelay={300}
              >
              <TableSortLabel
                active={orderBy === column.id}
                direction={order}
                hideSortIcon={orderBy !== column.id}
                onClick={(e) => createSortHandler(e, column.id)}
                >
                {column.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columnData: PropTypes.array.isRequired,
  checkcell: PropTypes.bool,
};

TableHeader.defaultProps = {
  onSelectAllClick: () => {},
  onRequestSort: () => {},
  checkcell: false
};

export default TableHeader;

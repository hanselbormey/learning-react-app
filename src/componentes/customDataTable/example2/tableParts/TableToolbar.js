import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import styles from '../tableStyle-jss';

function TableToolbar(props) {
  const {
    numSelected,
    classes,
    filterText,
    placeholder,
    title,
    onUserInput
  } = props;

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = useCallback(() => {
    setShowSearch(show => !show);
  }, []);

  const handleChange = useCallback((event) => {
    event.persist();
    onUserInput(event.target.value);
  }, [onUserInput]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={classes.actionsToolbarRoot}>
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected}
              &nbsp;rows selected
            </Typography>
          ) : (
              <Typography variant="h6">{title}</Typography>
            )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actionsToolbar}>
          {numSelected > 0 && (
            <div>
              <Tooltip title="Link">
                <IconButton aria-label="Link">
                  <LinkIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Unlink">
                <IconButton aria-label="Unlink">
                  <LinkOffIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </div>
        </div>
        {numSelected > 0 && (<Divider variant="middle" />)}
        <div className={classes.actions}>
          {showSearch && (
            <FormControl className={classNames(classes.textField)}>
              <Input
                id="search_filter"
                type="text"
                placeholder={placeholder}
                value={filterText}
                onChange={(event) => handleChange(event)}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton aria-label="Search filter">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>
          )}
          <Tooltip title="Filter list">
            <IconButton
              aria-label="Filter list"
              className={classes.filterBtn}
              onClick={() => toggleSearch()}
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </div>
    </div>
  );
}

TableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default withStyles(styles)(TableToolbar);

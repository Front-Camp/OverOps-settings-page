import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SettingsIcon from '@material-ui/icons/Settings';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import {hideCharacters} from './utils';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    backgroundColor: '#22272c'
  },
  table: {
    minWidth: 400,
    maxWidth: 900
  },
  cell: {
    color: '#fff',
    borderBottom: '1px solid #5c656e'
  },
  actions: {
    color: '#51b2e9',
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cellWithoutBorder: {
    border: 0
  },
  action: {
    cursor: 'pointer'
  },
  icon: {
    fontSize: '14px',
    color: '#51b2e9',
    position: 'relative',
    top: '2px',
    marginRight: '3px'
  }
});

let id = 0;
function createData(name, keyId, role) {
  id += 1;
  return { id, name, keyId, role };
}

const rows = [
  createData('PreProd', 'S159231474129903482015837223451360309152513', 'Owner'),
  createData('Staging', 'S123451592314741299034820158372234513603091', 'Admin'),
  createData('John\'s key', 'S159231474129903482015837223451360309152513', 'Admin'),
  createData('QA checks', 'S159231474129903482015837223451360309152513', 'Member'),
  createData('Shir\'s key', 'S159231474129903482015837223451360309152513', 'Member'),
  createData('Jenny\'s', 'S159231474129903482015837223451360309152513', 'Member'),
];

class EnvironmentsTable extends Component {
  state = {
    revealKeyIdForRow: null
  }

  render () {
    const {classes} = this.props;
    return (<Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Key Name</TableCell>
            <TableCell className={classes.cell}>Key ID</TableCell>
            <TableCell className={classes.cell}>Role</TableCell>
            <TableCell className={classes.cellWithoutBorder}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            return (
              <TableRow key={row.id}>
                <TableCell className={classes.cell} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.cell}>
                  {this.state.revealKeyIdForRow === i ? row.keyId : hideCharacters(row.keyId)}
                  <span onClick={() => this.setState({revealKeyIdForRow: i})} style={{
                    marginLeft: '5px',
                    cursor: 'pointer'
                  }}><EyeIcon className={classes.icon} /></span>
                </TableCell>
                <TableCell className={classes.cell}>{row.role}</TableCell>
                <TableCell className={classes.cellWithoutBorder}>
                  <div className={classes.actions}>
                    <span className={classes.action}>Install</span>
                    <span>{' | '}</span>
                    <span className={classes.action}><SettingsIcon className={classes.icon} />Settings</span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>);
  }
}

EnvironmentsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnvironmentsTable);

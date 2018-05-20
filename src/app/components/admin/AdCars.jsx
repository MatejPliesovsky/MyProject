import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

const styles = {
  smallIcon: {
    width: 26,
    height: 26
  },
};


const tableData = [
  {
    brand: 'Suzuki',
    model: 'Swift gti',
    fuel: 'petrol',
    power: '80kw',
    turbo:'no',
    gear: 'front',
  },
  {
    brand: 'Skoda',
    model: 'Felicia',
    fuel: 'petrol',
    power: '68kw',
    turbo:'no',
    gear: 'front',
  },
  {
    brand: 'Citroen',
    model: 'Saxo',
    fuel: 'petrol',
    power: '89kw',
    turbo:'no',
    gear: 'front',
  },
  {
    brand: 'Honda',
    model: 'Civic',
    fuel: 'petrol',
    power: '75kw',
    turbo:'no',
    gear: 'front',
  },
  {
    brand: 'Marian Macej',
    model: 'Rally-Foto',
    fuel: 'petrol',
    power: '95kw',
    turbo:'no',
    gear: 'rear',
  },
  {
    brand: 'Honda',
    model: 'Civic',
    fuel: 'petrol',
    power: '92kw',
    turbo:'no',
    gear: 'front',
  },
  {
    brand: 'Ford',
    model: 'Fiesta',
    fuel: 'petrol',
    power: '80kw',
    turbo:'no',
    gear: 'front',
  },
];

class AdCars extends Component {
  state = {
    fixedHeader: true,
    stripedRows: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
  };

  render() {
    return (
      <div>
        <Table
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Brand">Brand</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Model">Model</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Fuel">Fuel</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Power">Power</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Turbo">Turbo</TableHeaderColumn>
          <TableHeaderColumn tooltip="The Gear">Gear</TableHeaderColumn>
          <TableHeaderColumn ></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.brand}</TableRowColumn>
              <TableRowColumn>{row.model}</TableRowColumn>
            <TableRowColumn>{row.fuel}</TableRowColumn>
          <TableRowColumn>{row.power}</TableRowColumn>
        <TableRowColumn>{row.turbo}</TableRowColumn>
      <TableRowColumn>{row.gear}</TableRowColumn>
      <TableRowColumn>
        <div>
          <IconButton iconStyle={styles.smallIcon} containerElement={<Link to="/Editor"/>}>
            <Edit/>
          </IconButton>
          <IconButton iconStyle={styles.smallIcon}>
            <Delete/>
          </IconButton>
        </div>
      </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default AdCars;

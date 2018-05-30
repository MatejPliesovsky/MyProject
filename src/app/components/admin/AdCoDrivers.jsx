import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';

const styles = {
  smallIcon: {
    width: 26,
    height: 26
  }
};

const tableData = [
  {
    name: 'Daniel Tutko',
    Team: 'PDautosport'
  }, {
    name: 'Milos Komenda',
    Team: 'Valusek motorsport'
  }, {
    name: 'Sofia Kravcukova',
    Team: 'QaM Racing'
  }, {
    name: 'Miroslav Fryvaldsky',
    Team: 'Rally-Sports.sk'
  }, {
    name: 'Marian Macej st.',
    Team: 'Rally-Foto'
  }, {
    name: 'Marek Surovsky',
    Team: 'Sting motorsport'
  }, {
    name: 'Lukas Spisak',
    Team: 'Branisa motorsport'
  }
];

class AdCoDrivers extends Component {
  state = {
    fixedHeader: true,
    stripedRows: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true
  };

  render() {
    return (<div>
      <Table fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
        <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Name">Meno a Priezvisko</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Team">Tím</TableHeaderColumn>
            <TableHeaderColumn ></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
          {
            tableData.map((row, index) => (<TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.Team}</TableRowColumn>
              <TableRowColumn>
                <div>
                  <IconButton iconStyle={styles.smallIcon} containerElement={<Link to = "/AdminDash" />}>
                    <Delete/>
                  </IconButton>
                </div>
              </TableRowColumn>
            </TableRow>))
          }
        </TableBody>
      </Table>
    </div>);
  }
}

export default AdCoDrivers;

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
import axios from 'axios';

const styles = {
  smallIcon: {
    width: 26,
    height: 26
  }
};

// const tableData = [
//   {
//     name: 'Roman Tutko',
//     Team: 'PDautosport'
//   }, {
//     name: 'Tomas Valusek',
//     Team: 'Valusek motorsport'
//   }, {
//     name: 'Jan Maslej',
//     Team: 'QaM Racing'
//   }, {
//     name: 'Zdenka Fryvaldska',
//     Team: 'Rally-Sports.sk'
//   }, {
//     name: 'Marian Macej',
//     Team: 'Rally-Foto'
//   }, {
//     name: 'Viliam Pitonak',
//     Team: 'Sting motorsport'
//   }, {
//     name: 'Lukas Branisa',
//     Team: 'Branisa motorsport'
//   }
// ];

class AdDrivers extends Component {
  state = {
    fixedHeader: true,
    stripedRows: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    tableData: null
  };

  fetchDrivers() {
    axios.get('/drivers').then((response) => {
      this.setState({tableData: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.fetchDrivers();
  }

  render() {
    const {tableData} = this.state;
    if (!tableData)
      return (<div>Loading data, please wait...</div>);
    return (<div>
      <Table fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
        <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn >ID</TableHeaderColumn>
            <TableHeaderColumn >Meno a Priezvisko</TableHeaderColumn>
            <TableHeaderColumn >Tím</TableHeaderColumn>
          <TableHeaderColumn >Dátum nar.</TableHeaderColumn>
        <TableHeaderColumn >E-mail</TableHeaderColumn>
      <TableHeaderColumn >Bydlisko</TableHeaderColumn>
        <TableHeaderColumn >Telefón</TableHeaderColumn>
      <TableHeaderColumn >Vodičský preukaz</TableHeaderColumn>
            <TableHeaderColumn ></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
          {
            tableData.map((row, index) => (<TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.firstname + ' ' + row.lastname}</TableRowColumn>
              <TableRowColumn>{row.team}</TableRowColumn>
            <TableRowColumn>{row.dob}</TableRowColumn>
          <TableRowColumn>{row.email}</TableRowColumn>
        <TableRowColumn>{row.street + ' ' + row.state+ ' ' +row.zip}</TableRowColumn>
              <TableRowColumn>{row.phone}</TableRowColumn>
            <TableRowColumn>{row.drivinglicence}</TableRowColumn>
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

export default AdDrivers;

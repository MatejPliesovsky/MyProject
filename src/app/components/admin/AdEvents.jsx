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
    date: '3.1.2018',
    event: 'Zimna Levoca',
    kategory: 'MRC'
  }, {
    date: '4.2.2018',
    event: 'Dobsinska Zima',
    kategory: 'MRC'
  }, {
    date: '10.3.2018',
    event: 'West-Lake Race Cestice',
    kategory: 'MTEcup'
  }, {
    date: '8.4.2018',
    event: 'West-Lake Cup Bankov',
    kategory: 'MTEcup'
  }, {
    date: '8.6.2018',
    event: 'Dolna Strehova',
    kategory: 'MRC'
  }
];

class AdEvents extends Component {
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
          <TableHeaderColumn tooltip="The Date">Dátum</TableHeaderColumn>
        <TableHeaderColumn tooltip="The Event">Podujatie</TableHeaderColumn>
      <TableHeaderColumn tooltip="The Kategory">Kategória</TableHeaderColumn>
            <TableHeaderColumn ></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
          {
            tableData.map((row, index) => (<TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.date}</TableRowColumn>
              <TableRowColumn>{row.event}</TableRowColumn>
              <TableRowColumn>{row.kategory}</TableRowColumn>
              <TableRowColumn>
                <div>
                  <IconButton iconStyle={styles.smallIcon}>
                    <Edit/>
                  </IconButton>
                  <IconButton iconStyle={styles.smallIcon} containerElement={<Link to="/Editor"/>}>
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

export default AdEvents;

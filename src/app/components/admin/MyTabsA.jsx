import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  pos: {
    marginTop: -889,
    marginLeft: 54,
    width: 1770
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  },
  conPos: {
    marginLeft: 10
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0'
  },
  propToggleHeader: {
    margin: '20px auto 10px'
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0'
  },
  propToggleHeader: {
    margin: '20px auto 10px'
  }
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed'
  }, {
    name: 'Randal White',
    status: 'Unemployed'
  }, {
    name: 'Stephanie Sanders',
    status: 'Employed'
  }, {
    name: 'Steve Brown',
    status: 'Employed'
  }, {
    name: 'Joyce Whitten',
    status: 'Employed'
  }, {
    name: 'Samuel Roberts',
    status: 'Employed'
  }, {
    name: 'Adam Moore',
    status: 'Employed'
  }
];

export default class MyTabsA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  render() {
    return (<div style={styles.pos}>
      <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
        <Tab label="Drivers" value={0}/>
        <Tab label="Co-Drivers" value={1}/>
        <Tab label="Cars" value={2}/>
        <Tab label="Events" value={3}/>
      </Tabs>
      <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

        <div style={styles.conPos}>
          <div>
            <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
              <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                  <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
                {
                  tableData.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>

        </div>

        <div style={styles.slide}>
          <div>
            <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
              <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                  <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
                {
                  tableData.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>
        </div>

        <div style={styles.slide}>
          <div>
            <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
              <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                  <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
                {
                  tableData.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>
        </div>
        <div style={styles.slide}>
          <div>
            <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
              <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                  <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
                {
                  tableData.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>
        </div>
        <div style={styles.slide}>
          <div style={styles.slide}></div>
        </div>
      </SwipeableViews>
    </div>);
  }
}

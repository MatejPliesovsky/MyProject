import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import SwipeableViews from 'react-swipeable-views';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import User from './User.jsx';
import CoDriver from './CoDriver.jsx';
import Car from './Car.jsx';

const styles = {
  pos: {
    width: 100 + '%'
  },
  slide: {
    padding: 10
  },
  save: {
    margin: 10
  },
  cancel: {
    margin: 20
  }
};

export default class MyTabsU extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      open: false
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton label="Zrušiť" primary={true} onClick={this.handleClose}/>,
      <FlatButton label="Uložiť" primary={true} linkButton={true} onClick={this.handleClose} href="/UserHomeScreen"/>
    ];

    return (<div style={styles.pos}>
      <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
        <Tab label="Môj profil" value={0}/>
        <Tab label="Tím" value={1}/>
        <Tab label="Vozidlo" value={2}/>
      </Tabs>
      <RaisedButton onClick={this.handleOpen} label="Uložiť" primary={true} style={styles.save}/>
      <RaisedButton label="Zrušiť" secondary={true} style={styles.cancel} containerElement={<Link to = "/UserHomeScreen" />}/>
      <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
        Uložiť zmeny?
      </Dialog>

      <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

        <User/>
        <div style={styles.slide}>
          <CoDriver/>
        </div>

        <div style={styles.slide}>
          <Car/>
        </div>

      </SwipeableViews>
    </div>);
  }
}

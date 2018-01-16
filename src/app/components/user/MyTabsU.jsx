import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';

import User from './User.jsx';
import CoDriver from './CoDriver.jsx';
import Car from './Car.jsx';
import Events from './Events.jsx';

const styles = {
  pos: {
    marginTop: -46 + '%',
    marginLeft: 54,
    width: 96.5 + '%'
  },
  slide: {
    padding: 10
  },
  save: {
    margin: 10
  },
  cancel: {
    margin: 10
  }
};

export default class MyTabsU extends React.Component {

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
        <Tab label="Profile" value={0}/>
        <Tab label="Team" value={1}/>
        <Tab label="Cars" value={2}/>
        <Tab label="Events" value={3}/>
      </Tabs>
      <RaisedButton containerElement={<Link to = "/UserDash" />} label="Submit" primary={true} style={styles.save}/>
    <RaisedButton containerElement={<Link to = "/UserDash" />} label="Cancel" secondary={true} style={styles.cancel}/>
      <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

        <User/>
        <div style={styles.slide}>
          <CoDriver/>
        </div>

        <div style={styles.slide}>
          <Car/>
        </div>

        <div style={styles.slide}>
          <Events/>
        </div>

      </SwipeableViews>
    </div>);
  }
}

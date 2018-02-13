import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import AdDrivers from './AdDrivers.jsx';
import AdCoDrivers from './AdCoDrivers.jsx';
import AdCars from './AdCars.jsx';
import AdEvents from './AdEvents.jsx';

const styles = {
  pos: {
    marginTop: -46 + '%',
    marginLeft: 54,
    width: 97.45 + '%',
  },
};

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
        <AdDrivers/>

        <div>
          <AdCoDrivers/>
        </div>

        <div>
          <AdCars/>
        </div>

        <div>
          <AdEvents/>
        </div>
      </SwipeableViews>
    </div>);
  }
}

import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import Profile from './Profile.jsx';
import Team from './Team.jsx';
import CarsEdit from './CarsEdit.jsx';

const styles = {
  pos: {
    position:'fix',
    width: 100 + '%'
  }
};

export default class CompEditor extends React.Component {

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
      </Tabs>
      <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
        <Profile/>

        <div>
          <Team/>
        </div>

        <div>
          <CarsEdit/>
        </div>
      </SwipeableViews>
    </div>);
  }
}

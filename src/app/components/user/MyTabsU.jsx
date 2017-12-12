import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import User from './User.jsx';

const styles = {
  pos:{
    marginTop:-46.8 + '%',
    marginLeft:54,
    width: 97.45 + '%',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  conPos:{
    marginLeft:10,
  },
  car: {
    height: 220,
    width: 480,
    marginTop:4,
    marginLeft:10,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#43A047'
  },
  submit: {
    width: 100,
    height: 45,
    marginTop: 1 + '%',
    marginRight: 40 + '%',
    marginBottom: 0 + '%'
  },
  cancel: {
    width: 100,
    height: 45,
    marginTop: -9 + '%',
    marginLeft: 40 + '%',
    marginBottom: 0 + '%'
  },
  circular:{
    marginTop:-240,
    marginLeft:500,
    width:240,
    height:240,
    borderRadius:100+'%'
  },
  carIm:{
    marginTop:-240,
    marginLeft:500,
    width:480,
    height:210,
    borderRadius:5+'%'
  },
  events:{
    height:500,
    width:480,
    marginTop:5,
    marginLeft:10,
    textAlign:'center',
    display:'inline-block',
    backgroundColor:'#F0F4C3',
  },
  info:{
    height: 500,
    width: 1000,
    marginTop: -515,
    marginLeft: 35 + '%',
    marginBottom: 10 + '%',
    marginRight: 18 + '%',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#F0F4C3'
  },
  eventIm:{
    width:300,
    height:400,
    marginRight:550,
  },
  text:{
    height: 350,
    width: 550,
    marginTop: -350,
    marginLeft: 40 + '%',
    marginBottom: 10 + '%',
    marginRight: 18 + '%',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#F0F4C3'
  },
};

export default class MyTabsU extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div style={styles.pos}>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Profile" value={0} />
          <Tab label="Team" value={1} />
          <Tab label="Cars" value={2} />
          <Tab label="Events" value={3} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

          <User/>

          <div style={styles.slide}>
            <h2 style={styles.headline}>Co-Driver's profile tab</h2>
            You can edit co-driver's profile here.<br />
            <TextField id="text-field-default" defaultValue="First name" /><br />
            <TextField id="text-field-default" defaultValue="Last name" /><br />
            <TextField id="text-field-default" defaultValue="Date of birth" /><br />
            <TextField id="text-field-default" defaultValue="Adress" /><br />
            <TextField id="text-field-default" defaultValue="Driving licence" /><br />
            <img style={styles.circular} src="http://profile.actionsprout.com/default.jpeg"/>
          </div>

          <div style={styles.slide}>
            <div>
              <List>
                <h2 style={styles.headline}>Car's details</h2>
                You can edit car's detais here.<br />
              <TextField id="text-field-default" defaultValue="Brand" /><br />
                <TextField id="text-field-default" defaultValue="Model" /><br />
                <TextField id="text-field-default" defaultValue="Fuel" /><br />
                <TextField id="text-field-default" defaultValue="Power" /><br />
                <TextField id="text-field-default" defaultValue="Turbo" /><br />
                <TextField id="text-field-default" defaultValue="Gear" /><br />
                <img style={styles.carIm} src="http://elektronika.com.pl/wp-content/uploads/2014/03/grupa-osobowe.png"/>
          </List>
        </div>
          </div>
          <div style={styles.slide}>
            <List>
              <Paper style={styles.events} zDepth={2}>
                <ListItem primaryText="Kalendar pretekov"/>
                <ListItem secondaryText="3.1.2018 MRC Zimna Levoca"/>
                <ListItem secondaryText="4.2.2018 MRC Dobsinska zima"/>
                <ListItem secondaryText="10.3.2018 West-Lake Race Cestice"/>
                <ListItem secondaryText="8.4.2018 West-Lake Cup Bankov"/>
              </Paper>
          </List>
          <List>
            <Paper style={styles.info} zDepth={2}>
              <ListItem primaryText="Event description"/>
              <img style={styles.eventIm} src="http://www.minirallycup.sk/docs/mrc_dz_2017_plagat.jpg"/>
              <Paper style={styles.text} zDepth={0}>"Zimna automobilova sutaz, nielen pre profesionalnych jazdcov, zaradena do podujatia MRC 2018."</Paper>
            </Paper>
        </List>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

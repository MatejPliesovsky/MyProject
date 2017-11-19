import React from 'react';
import Paper from 'material-ui/Paper';
import {List,ListItem} from 'material-ui/List';

const styles={
  bgPaper:{
    height:200,
    width:480,
    marginTop:-46+'%',
    marginLeft:60+'%',
    marginBottom:10+'%',
    marginRight:18+'%',
    textAlign:'center',
    display:'inline-block',
    backgroundColor:'#43A047',
  },
}

export default class Login extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <List>
          <Paper style={styles.bgPaper} zDepth={2}><ListItem primaryText="Prihlasenie"/></Paper>
      </List>
    </div>
    );
  }
}

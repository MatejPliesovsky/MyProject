import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ''
      }
    }
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    axios.get('/users')
      .then( (response) => {
        this.setState({
          user: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div>
        <h2 >Profile tab</h2>
        You can edit your profile here.<br />
        <TextField id="text-field-default" value={this.state.user.name} /><br />
        <TextField id="text-field-default" defaultValue="Last name" /><br />
        <TextField id="text-field-default" defaultValue="Date of birth" /><br />
        <TextField id="text-field-default" defaultValue="Adress" /><br />
        <TextField id="text-field-default" defaultValue="Driving licence" /><br />

      </div>

    );
  }
}

export default User;

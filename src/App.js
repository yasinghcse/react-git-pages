import React, { Component } from 'react';
import './App.css';
import UserList from "./components/UserList/UserList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => this.setState({users: json}))
  }

  render() {
    return (
      <div style={{ display: "flex"}}>
        <UserList users={this.state.users} />
      </div>
      
    );
  }
}

export default App;

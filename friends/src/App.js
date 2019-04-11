import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import FriendList from './Components/FriendList';
import AddFriend from './Components/AddFriend';

class App extends Component {
  constructor(){
    super()
    this.state={
      friends:[]
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err))
  }

  updateFriends = newFriends => {
    this.setState({friends: newFriends})
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
      <Route exact path="/" render={props => <FriendList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend}/>} />
      <Route path="/add" render={props => <AddFriend {...props} updateFriends={this.updateFriends} /> } />
      </div>
    );
  }
}

export default App;

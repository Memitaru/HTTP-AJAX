import React from "react";
import axios from 'axios';
import styled from 'styled-components';

const AddForm = styled.form`
    display: flex;
    justify-content: center;
`

const InputField = styled.input`
    margin: 5px;
`

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        friend: {
            name: '',
            age: '',
            email: ''
        },
    }
  }

  changeHandler = e => {
      e.persist();
      let value = e.target.value;
      this.setState(prevState => ({
          friend: {...prevState.friend, [e.target.name]: value}
      }))
  }


  submitHandler = e => {
      e.preventDefault();
      axios
        .post("http://localhost:5000/friends", this.state.friend)
        .then(response => {
            this.props.updateFriends(response.data);
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err);
        })

  }

  

  render() {
    return (
      <div>
        <AddForm onSubmit={this.submitHandler}>
          <InputField 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={this.changeHandler}
            value={this.state.friend.name}
            required
        />
          <InputField
            type="number" 
            name="age" 
            placeholder="Age" 
            onChange={this.changeHandler}
            value={this.state.friend.age}
            required
        />
          <InputField
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange = {this.changeHandler}
            value={this.state.friend.email}
            required
        />
          <button type="submit">Add Friend</button>
        </AddForm>
      
      </div>
    );
  }
}

export default AddFriend;

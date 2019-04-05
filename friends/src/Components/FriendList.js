import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const AddButton = styled.button`
    width: 25%;
    margin-left: 37.5%;
    height: 35px;
    background-color: lightgray;
    border: none
    font-size: 20px;
`

const FriendList = props => {
    return(
        <div>
            <div><Link to="/add"><AddButton>Add New Friend</AddButton></Link></div>
        <ListContainer>
         {props.friends.map(friend => <Friend friend={friend} deleteFriend={props.deleteFriend} key={friend.id}/>)}
        </ListContainer>
        </div>
    )
}

export default FriendList;
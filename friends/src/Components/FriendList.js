import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const FriendList = props => {
    return(
        <div>
            <div><Link to="/add">Add New Friend</Link></div>
        <ListContainer>
         {props.friends.map(friend => <Friend friend={friend} />)}
        </ListContainer>
        </div>
    )
}

export default FriendList;
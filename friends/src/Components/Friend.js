import React from 'react';
import styled from 'styled-components';

let FriendContainer = styled.div`
    border: 1px solid black;
    margin: 5px auto;
    padding: 10px;
    width: 30%;
    min-width: 200px;
`

let Name = styled.h1`
    font-size: 25px;
    color: dodgerblue;
`

let Details = styled.p`
    font-size: 16px;
`

const Friend = props => {
    return(
        <FriendContainer>
            <Name>Name: {props.friend.name}</Name>
            <Details>Age: {props.friend.age}</Details>
            <Details>Email: {props.friend.email}</Details>
        </FriendContainer>
    )
}

export default Friend;
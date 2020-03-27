import React from "react";
import Card from 'react-bootstrap/Card';

const User = (props) => {
    const { user } = props;
    return(
        <Card style={{  margin: '10px' }}>
        <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
                Description about the user
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default User;
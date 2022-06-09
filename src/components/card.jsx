import React from "react";
import { Card, Button, CardGroup } from 'react-bootstrap';

function MyCard(props){

    return(
        <CardGroup id="cardAllItems">
            <Card className="cardIndividualItem" style={{ width: '9rem' }}>
                <Card.Body>
                    <Card.Img className="cardImage" variant="top" src={props.imgURL} alt="img" />
                    <Card.Title>{props.service}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

function createCard(props){
    return (
    <MyCard
        key={props.id}
        service={props.service}
        imgURL={props.imgURL}
    />);
}

export default createCard;
import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'; 
function contentCard(props) {
    return (
        <Col lg="4" md="6">
            <Link to={`/content/${props.content.id}`}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.content.img} />
                <Card.Body>
                    <Card.Title>{props.content.title}</Card.Title>
                </Card.Body>
                </Card>
        </Link>
            </Col>

    )
}

export default contentCard;
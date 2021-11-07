
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  const { _id, name, img, discription,price} = props.service;
  return (
    <Col>
      <Card className='card-info'>
        <Card.Img variant="top" src={img} />
        <Card.Body className='card-body'>
          <Card.Title className='first-title'>{name}</Card.Title>
          <Card.Text className='discription'>
            {discription}
          </Card.Text>
          <h4 className='text-secondary'>Cost:{price}$</h4>
        </Card.Body>
        <Link to={`/detail/${_id}`}>
          <span><Button className='mb-3 btn' variant="info">Booking Now</Button></span>
        </Link>
      </Card>
    </Col>




  );
};

export default Service;
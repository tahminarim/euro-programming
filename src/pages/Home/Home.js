import React from 'react';

import pic1 from '../banner/pic1.webp';
import pic3 from '../banner/pic3.webp';
import pic4 from '../banner/pic4.webp';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';

const Home = () => {
    return (
    <CardGroup className='m-4 p-4 bg-primary' style={{ backgroundImage: `url(require("https://www.wolfram.com/programming-lab/images/laptop/laptop.png"))`}}>
      <Card className='border border-warning '>
        <Card.Img variant="top" src={pic3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='border border-warning bg-warning'>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
   
      <Card>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-warning'>
          <small className="text-muted "></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
};

export default Home;
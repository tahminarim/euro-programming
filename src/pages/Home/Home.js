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
          <Card.Title> WEB DEVELOPER</Card.Title>
          <Card.Text>
          
              Become a fullstack developer, improve your skills in HTML,CSS, Javascript, PHP… 
          </Card.Text>
        </Card.Body>
        <Card.Footer className='border border-warning bg-warning'>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>

      <Card>
        <img variant="top" src={pic4} alt="" 
        style={{ height: "18em" ,
         width: "20em" , margin: "10px" }} />

      </Card>
   
      <Card className='border border-warning '>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
          <Card.Title> TO BE ABLE TO</Card.Title>
          <Card.Text>
         
Develop the functionalities of a website or a web application (back-end)
Develop the visual part of a website or a web application (front-end)
Implement a content management solution (CMS)
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
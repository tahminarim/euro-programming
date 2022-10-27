import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>#1 What will be my job after doing the courses?</Accordion.Header>
          <Accordion.Body>
                *Employee of a digital services company (ESN) or a web agency, on client projects
                <br/>*Employee of a company, on internal projects
                <br/>*Independent, directly for customers
           </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1">
          <Accordion.Header>#2  What will be the technical skil?</Accordion.Header>
          <Accordion.Body>
                 * Implement the methods and techniques of programming a language

                <br/>
                * Use layout tools <br/>
                * Use content management solutions (CMS)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>#3 PROFESSIONAL POSTURE?</Accordion.Header>
          <Accordion.Body>
                    The web developer is:

                    Autonomous
                    Rigorous and methodical
                    Listening to the customer
                    Good communicator          
            </Accordion.Body>
        </Accordion.Item>



        <Accordion.Item eventKey="3">
          <Accordion.Header>#4 What are the goal of the course? </Accordion.Header>
          <Accordion.Body>
                 Develop the functionalities of a website or a web application (back-end)
                Develop the visual part of a website or a web application (front-end)
                Implement a content management solution (CMS)
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>
    );
};

export default FAQ;
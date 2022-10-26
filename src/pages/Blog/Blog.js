import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>#1 What is CORS?</Accordion.Header>
          <Accordion.Body>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1">
          <Accordion.Header>#2 Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>
          Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.   
            <br/>
            Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            <br/>
            5 Common Authentication Types
                Password-based authentication. Passwords are the most common methods of authentication. ...
                Multi-factor authentication. ...
                Certificate-based authentication. ...
                Biometric authentication. ...
                Token-based authentication.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>#3 How does the private route work?</Accordion.Header>
          <Accordion.Body>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
         
          </Accordion.Body>
        </Accordion.Item>



        <Accordion.Item eventKey="3">
          <Accordion.Header>#4 What is Node? How does Node work? </Accordion.Header>
          <Accordion.Body>
          Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. 
         
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>
    );
};

export default Blog;
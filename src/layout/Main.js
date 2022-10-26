import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import  Footer  from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Outlet></Outlet>
                </Row>
            </Container>


            <Footer> </Footer>
            
        </div>
    );
};

export default Main;
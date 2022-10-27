import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {  FcMultipleDevices } from "react-icons/fc";
import './Header.css'

import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

   // handling log out
     const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    //theme mode changing 

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);




    return (
            <div className={`${theme}`}>
                <Navbar collapseOnSelect className='mb-4' expand="lg" >
                    <Container >
                        <Navbar.Brand > <h1 className='text-warning'><FcMultipleDevices /> Euro<span className='text-primary'> Programming</span></h1> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link href="/courses">Courses</Nav.Link>
                                <Nav.Link href="blog">Blog</Nav.Link>
                                <Nav.Link href="faq">FAQ</Nav.Link>
                                <NavDropdown title="Screen Mode" id="collasible-nav-dropdown">
                                    <NavDropdown.Item  onClick={toggleTheme}>Dark mode</NavDropdown.Item>
                                    <NavDropdown.Item  onClick={toggleTheme}> Light mode </NavDropdown.Item>
                                
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                <Button variant="warning">{user?.displayName}</Button>
                                                <Button variant="primary" onClick={handleLogOut}>Log out</Button>
                                            </>
                                            :
                                            <>
                                                <Link to='/login' variant="primary"><Button>Log In</Button></Link>
                                                <Link to='/register' variant="primary"><Button>Register</Button></Link>
                                            </>
                                    }


                                </>
                                <Link to="/profile">
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '50px' }}
                                            roundedCircle
                                            src={user?.photoURL}>
                                        </Image>
                                        : <FaUser></FaUser>
                                    }
                                </Link>
                            </Nav>
                            <div className='d-lg-none'>
                                
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    );
};

export default Header;
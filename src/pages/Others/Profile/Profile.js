import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }

    return (
        <div className='d-flex justify-content-center align-items-center '>
            <div className='m-5'>
                {user?.email && <h1> {user?.displayName}</h1>}
                {user?.email && <Image style={{ height: '250px' }}
                                    roundedCircle src={user?.photoURL} alt="profile" />}
            </div>
            <div className='m-5 p-9'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>


        </div>
    );
};

export default Profile;
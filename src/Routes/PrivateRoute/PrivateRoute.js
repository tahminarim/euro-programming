import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


/* 
 allow authenticated user to visit the route
*/

const PrivateRoute = ({children}) => {
    console.log('children',children)
    const {user, loading} = useContext(AuthContext);
    console.log('user private',user)
    const location = useLocation();

    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;
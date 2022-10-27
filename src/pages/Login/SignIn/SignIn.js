import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn= ()=>{
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))

    }

    

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                
            
                <Button onClick={handleGithubSignIn}  variant="outline-warning"> <FaGithub></FaGithub> Login with Github</Button>
            
            </ButtonGroup>

         
        </div>
    );
};

export default SignIn;
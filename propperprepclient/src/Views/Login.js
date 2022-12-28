import React from 'react';
import { Button } from 'react-bootstrap';
import GoogleImage from '../Images/GoogleImage'
import { signIn } from '../Utils/auth';

export default function Login() {
    return (
        <div>
            <h1>Welcome! Please Log in!</h1>
            <div>
                <Button className='LoginButton' type='button' onClick={signIn}> 
                Login with Google
                    <img
                        className='GoogleLogo'
                        alt='GoogleLogo'
                        src={GoogleImage}
                    /> 
                </Button>
            </div>
        </div>
        

    )
}
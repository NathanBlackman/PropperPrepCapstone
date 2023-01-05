import React from 'react';
import { Button } from 'react-bootstrap';
import PropperPrepLogoWText from '../Images/PropperPrepLogoWText';
import GoogleImage from '../Images/GoogleImage'
import { signIn } from '../Utils/auth';

export default function Login() {
    return (
        <div>
            <img
                className='loginlogo'
                alt='Logo'
                src={PropperPrepLogoWText}
            />
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
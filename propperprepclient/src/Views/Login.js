import React from 'react';
import { signIn } from '../Utils/auth';

export default function Login() {
    return (
        <div>
            <h1>Welcome! Please Log in!</h1>
            <div>
                <button type='button' onClick={signIn}> Login </button>
            </div>
        </div>
        

    )
}
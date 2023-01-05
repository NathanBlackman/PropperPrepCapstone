import React from 'react';
import { Button } from 'reactstrap';
import { signOutUser } from '../Utils/auth';
//import PropTypes from 'prop-types';

export default function Profile({ user }) {  
    
    return (
        <div>
            <h1>Profile</h1>
            <div className='ProfileNameAndPic'>

                <img className='ProfilePic'
                    src={user.photoURL} 
                    alt={user.displayName}
                />
            </div>  
            <h1 className='ProfileName'>{user.displayName}</h1>
            <Button
                className='profile-signout'
                onClick={signOutUser}
            >
                Sign Out
            </Button>
            
        </div>
    )
}


import React from 'react';
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
                <h1>{user.displayName}</h1>
            </div>
        </div>
    )
}


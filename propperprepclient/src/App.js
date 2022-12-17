import React from 'react';
//import React, { useState } from 'react';
import Router from './Router';
import Loader from './Components/Loading';
import { Navigation } from './Components/Navigation';
import 'firebase/auth';
import Login from './Views/Login';
import { useAuth } from './Utils/authContext';


function App() {
  const { user, userLoading } = useAuth();

  if (userLoading) {
    return <Loader />
  }
 

/*
  return (
    
    <div className="App">
      <>
        <Navigation />
        <Router />
      </>
    </div>
  );
  */
  return (
    <div className="App">
      { user ? (
      <>
        <Navigation user={user}/>
        <Router user={user}/>
      </>
      ) : (
        <Login />
      )}
      
    </div>
    
  );

}

export default App;

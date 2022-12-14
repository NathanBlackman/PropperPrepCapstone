import React from 'react';
import Router from './Router';
import Loading from './Components/Loading';
import { Navigation } from './Components/Navigation';
import 'firebase/auth';
import Login from './Views/Login';
import { useAuth } from './Utils/authContext';

function App() {
  const { user, userLoading } = useAuth();

  if (userLoading) {
    return <Loading />
  }

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

import React from 'react';
import Router from './Router';
import { Navigation } from './Components/Navigation'

function App() {
  return (
    <div className="App">
      <>
        <Navigation />
        <Router />
      </>
    </div>
  );
}

export default App;

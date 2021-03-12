import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';

function App() {
  return (
    <div className='App'>
      <Router>
        <Main path="/authors"/>
        <New path="/authors/new"/>
        <Update path="/authors/edit/:id"/>
      </Router>
    </div>
  );
};


export default App;

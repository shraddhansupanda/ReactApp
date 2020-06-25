import React from 'react';
import './App.css';

import { Button } from 'semantic-ui-react'

import FormExampleCaptureValues from './inputform';
import { Header } from 'semantic-ui-react'


function App() {    
  return (
    <div className="App">
      <Header as='h1'>Enter your name and Email ID</Header>
      <header className="App-header">
      <FormExampleCaptureValues />   
      </header>
    </div>
  );
}

export default App;

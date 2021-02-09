import React, { useState, useEffect } from 'react';
import './App.css';
import Details from './Details';
import ListData from './ListData';

function App() {
  return (
    <div className='app'>
      <h1>Todo List Data Loading by button click</h1>
      <ListData />
      {/* <Details /> */}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import ListData from './ListData';

function App() {
  return (
    <div className='app'>
      <h1>Todo List Data Loading by button click</h1>
      <ListData />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './Room.js';
import Room_Function_Restructuring from './Room_Function_Restructuring';

function App() {
  return (
   <div>
     <Room></Room>
     <br/>
     <br/>
     <h1>From Room_Function_Restructuring.js</h1>
     <Room_Function_Restructuring></Room_Function_Restructuring>
   </div>
    
  );
}

export default App;

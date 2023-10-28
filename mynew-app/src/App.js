import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import { useRef } from 'react';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomId" element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;

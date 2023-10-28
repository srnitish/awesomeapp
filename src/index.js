import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { StrictMode } from 'react';


const root = createRoot(document.getElementById("root"));
root.render ( <StrictMode><App/></StrictMode>, document.getElementById('root'));

// ReactDOM.render('what to show', 'where to show', 'callback function');

// root.render (  
//   <div className='gallery' style={{
//   display: 'flex',
//   justifyContent: 'center',
//   margin: '0 auto',
//   border: '1px solid #000'
// }}>
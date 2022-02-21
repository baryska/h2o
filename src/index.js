import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import About from './About';
import Photo from './Photo';
import Rivers from './Rivers';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={ <About />} />
         <Route path="/photos" element={ <Photo />} />
         <Route path="/rivers" element={ <Rivers /> } />
       </Routes>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


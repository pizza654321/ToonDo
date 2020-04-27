import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './scripts/nav-bar.js';
import "./styles/index.css";

var destination = document.querySelector("#container")
 
ReactDOM.render(
    <div>
        <NavBar/>
    </div>,
    destination
);
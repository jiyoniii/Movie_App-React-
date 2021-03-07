import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Potato from "./Potato";

// <App />, <Potato /> 들은 하나의 component임. component는 html을 반환하는 함수. 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

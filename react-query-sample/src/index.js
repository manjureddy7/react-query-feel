import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Child3 from './components/Child3';

// Follow below article why i'm passing component as prop to app.js
// https://kentcdodds.com/blog/optimize-react-re-renders

// ReactDOM.render(
//   <React.StrictMode>
//     <App child3={<Child3 />}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Header, RenderContent} from './App';
import { Page } from './FullPage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
		<Page />  
   </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <RenderContent url={window.location.pathname} />
//     </React.StrictMode>,
//     document.getElementById('container')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

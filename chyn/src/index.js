import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header, Carousel, Container, Tumblr} from './App';
import * as serviceWorker from './serviceWorker';
import RSSWidget from './rss/RSSReader'

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <RSSWidget url="https://eat-dust.tumblr.com/rss/?orderby=pubDate" title="Tumblr Feed" />
    </React.StrictMode>,
    document.getElementById('container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

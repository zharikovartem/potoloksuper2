import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { rerenderEntireTree } from './render';
import data from './Redux/State';


rerenderEntireTree(data);


serviceWorker.unregister();

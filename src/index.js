import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/styles.scss';

import { JournalApp } from './JournalApp';

ReactDOM.render(
  <BrowserRouter>
    <JournalApp />
  </BrowserRouter>,
  document.getElementById('root')
);
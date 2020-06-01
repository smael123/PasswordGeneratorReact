import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppHookComponent from './components/AppHookComponent';

ReactDOM.render(
  <React.StrictMode>
      <AppHookComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

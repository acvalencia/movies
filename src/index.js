import React from 'react';
import ReactDOM from 'react-dom';
import MoviesApp from './MoviesApp';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from 'easy-peasy';
import { store } from './redux/store';

ReactDOM.render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <MoviesApp />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// edited from local

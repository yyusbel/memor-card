import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Style from './theme/Style';
import Theme from './theme/Theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Style />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

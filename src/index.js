
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// // import './styles.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


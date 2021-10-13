// Install fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { store } from 'app/store';
import 'config/initFirebase';
import { firebaseConfig } from 'config/initFirebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import './config/initFirebase';
import reportWebVitals from './reportWebVitals';
import { darkTheme } from './themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Provider store={store}>
          <App />
        </Provider>
      </FirebaseAppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

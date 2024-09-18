import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './Components/App/App';
import { ThemeProvider } from '@mui/material';
import { store } from './store';
import { theme } from './theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider theme={theme()}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
);
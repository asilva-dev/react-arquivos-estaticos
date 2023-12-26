import 'normalize.css';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <Router />
        </StrictMode>,
    );
} else {
    console.error('Element with id "root" not found');
}



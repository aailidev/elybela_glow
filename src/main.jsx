import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { i18nReady } from './i18n/index.js';

const root = createRoot(document.getElementById('root'));

i18nReady.then(() => {
  root.render(
    <StrictMode>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </StrictMode>
  );
});

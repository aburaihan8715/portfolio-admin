import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@smastrom/react-rating/style.css';
import App from './App.tsx';
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider as ReduxProvider } from 'react-redux';
import { reduxPersistor, store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistGate loading={null} persistor={reduxPersistor}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </PersistGate>
    <Toaster />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SocketContextProvider from './context/SocketContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
);

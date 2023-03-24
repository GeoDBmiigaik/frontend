import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ModalState } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
);

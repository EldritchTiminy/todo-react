import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Greeting from './Greeting.jsx';
import {NavBar} from './navbar';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
    <Greeting />
    <NavBar />
  </StrictMode>,
);
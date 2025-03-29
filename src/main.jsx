import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import App from './App.jsx'
import Bio from './bio_page.jsx';
import LoadingScreen from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bio />
    <LoadingScreen/>
  </StrictMode>,
)

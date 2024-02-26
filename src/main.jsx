
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import style
import './styles/style.css';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import { getLogger } from './utils/logger';
import './index.css';

const logger = getLogger('app');

logger.log('renderer execution started');

const root = <Application />;

createRoot(document.getElementById('root')).render(root);

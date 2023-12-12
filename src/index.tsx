import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
	const root = createRoot(rootElement);

	root.render(
		<StrictMode>
			<Cardapio />
		</StrictMode>,
	);
} else {
	console.error('Element with id "root" not found');
}



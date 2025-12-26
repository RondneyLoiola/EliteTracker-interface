/** biome-ignore-all lint/style/noNonNullAssertion: document root*/
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css';
import { RouterProvider } from 'react-router';
import UserProvider from './hooks/useUser';
import router from './routes';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</StrictMode>,
);

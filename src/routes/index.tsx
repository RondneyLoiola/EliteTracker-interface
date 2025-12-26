import { createBrowserRouter } from 'react-router';
import Auth from '../pages/Auth';
import Habits from '../pages/Habits';
import Login from '../pages/Login';
import { PrivateRoute } from './PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoute component={<Habits />} />,
	},
	{
		path: '/entrar',
		element: <Login />,
	},
	{
		path: '/autenticacao',
		element: <Auth />,
	},
]);

export default router;

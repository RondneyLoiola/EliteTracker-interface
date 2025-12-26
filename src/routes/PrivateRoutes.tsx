import { Navigate } from 'react-router';
import { userLocalStorageKey } from '../hooks/useUser';

type PrivateRoutePropes = {
	component: React.ReactNode;
};

export function PrivateRoute({ component }: PrivateRoutePropes) {
	const userData = localStorage.getItem(userLocalStorageKey);

	if (!userData) {
		return <Navigate to="/entrar" />;
	}

	return <>{component}</>;
}

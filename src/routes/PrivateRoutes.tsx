import { Navigate } from 'react-router';
import AppContainer from '../components/AppContainer';
import SideBar from '../components/Sidebar';
import { userLocalStorageKey } from '../hooks/useUser';

type PrivateRoutePropes = {
	component: React.ReactNode;
};

export function PrivateRoute({ component }: PrivateRoutePropes) {
	const userData = localStorage.getItem(userLocalStorageKey);

	if (!userData) {
		return <Navigate to="/entrar" />;
	}

	return (
		<AppContainer>
			<SideBar />
			{component}
		</AppContainer>
	);
}

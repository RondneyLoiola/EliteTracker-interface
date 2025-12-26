/** biome-ignore-all lint/correctness/useExhaustiveDependencies: useEffect */
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.css';

function Auth() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { getUserInfo } = useUser();

	async function handleAuth() {
		getUserInfo(String(searchParams.get('code')));
		//dados do usuário logado

		navigate('/');
	}

	useEffect(() => {
		handleAuth();
	}, []);

	return (
		<div className={styles.container}>
			<h1>Carregando...</h1>
		</div>
	);
}

export default Auth;

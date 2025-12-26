/** biome-ignore-all lint/correctness/useExhaustiveDependencies: useEffect */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.css';

function Auth() {
	const [searchParams] = useSearchParams();
	const { userData, getUserInfo } = useUser();

	useEffect(() => {
		getUserInfo(String(searchParams.get('code')));
	}, []);

	return (
		<div className={styles.container}>
			<h1>Carregando...</h1>
			<p>{JSON.stringify(userData)}</p>
		</div>
	);
}

export default Auth;
